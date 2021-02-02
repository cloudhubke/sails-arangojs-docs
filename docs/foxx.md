---
id: foxx
title: Foxx Services
sidebar_label: Foxx Services
---

Foxx services are very powerful in ArangoDb. The allow you to implement custom APIs inside the database. [you can read mote about foxx service here](https://www.arangodb.com/docs/stable/foxx.html)

In sails-arangodb foxx services can be installed at runtime and called from transactions created inside the sails application.

## Creating a basic foxx service

In this example we shall create a service for posting transactions to a third party API endpoint say for marketing.

create a `foxx` folder inside your sails application's controllers folder.

you can organize multiple services in folders.

create a `marketing` folder inside the `foxx` folder. While there, create a `manifest.json` file. [The full process in creating foxx services is well documented here](https://www.arangodb.com/docs/stable/foxx-getting-started.html)

### manifest.json

```
{
  "name": "marketing",
  "engines": {
    "arangodb": "^3.0.0"
  },

  "main": "index.js",
  "scripts": {
    "setup": "scripts/setup.js",
    "postEntry": "scripts/post-entry.js"
  }
}
```

### index.js

The index.js file can be used to allow get and post requests in a service. You may never need to use this feature and it can easily be disabled

```

'use strict';
const createRouter = require('@arangodb/foxx/router');
const joi = require('joi');

const router = createRouter();

module.context.use(router);

router
.get('/someroute', (req, res) => {
// const params = req.queryParams || {};

    try {
      const entry = {some: 'data' };
      res.send(entry);
    } catch (error) {
      res.send(error);
    }

})
.response(joi.object().required(), 'return some data')
.summary('some data service')
.description('Service to get some data from arango server');


```

### setup.js

```
'use strict';

const db = require('@arangodb').db;
const queues = require('@arangodb/foxx/queues');

queues.create('api-queue');

if (!db._collection('marketing')) {
  db._createDocumentCollection('marketing');
}

```

### post-entry.js

```
'use strict';
// const db = require('@arangodb').db;
const Joi = require('joi');
const request = require('@arangodb/request');

const schema = Joi.object({
  Url: Joi.string().required(),
  Params: Joi.object().required(),
});

function validate(params) {
  const validate = schema.validate(params, { allowUnknown: true });
  if (validate.error) {
    throw `PARAMS_VALIDATION_ERROR ${validate.error}`;
  }
}

const { argv } = module.context;
const params = Object.assign({}, argv[0]);
let response;
try {
  validate(params);

  response = request({
    method: 'post',
    url:
      process.env.NODE_ENV === 'production'
        ? `https://marketing.endpoint.com/api${params.Url}`
        : `http://127.0.0.1:1556/api${params.Url}`,
    headers: { apikey: process.env.MARKETING_API_KEY },
    form: params.Params,
  });

  if (response.status !== 200) {
    throw new Error(`Error posting ${JSON.stringify(response)}`);
  }
  // You may want to save

  db.marketing.save(params)
} catch (error) {
  throw error;
}

module.exports = response;


```

## installing the service

The service folder has to be zipped. `zip -vr api/foxx/marketing.zip api/foxx/marketing`
A service function can be created to run when sails lifts.

```
loadFoxxServices: async () => {
    try {
      const { dbConnection } = sails.getDatastore().manager;

      let services = await dbConnection.listServices();
      services = services.map((service) => service.mount);



      if (!services.includes('/marketing')) {
        const source = fs.createReadStream(
          path.join(__dirname, '../foxx/marketing.zip')
        );
        await dbConnection.installService(`/marketing`, source);
      } else {
        const source = fs.readFileSync(
          path.join(__dirname, '../foxx/marketing.zip')
        );
        await dbConnection.replaceService('/marketing', source);
      }

    } catch (error) {
      throw error
    }
  },

```

### Using the service in a transaction

The service can be used either by http requests or by creating queues

an example using queues

```
 const apiQueue = queues.get('api-queue');

    const Params = {
      // ...created params object
    };

    apiQueue.push(
      { mount: '/marketing', name: 'postEntry' },
      {
        Url: '/marketing/end/point',
        Params,
      },
      {
        delayUntil: Date.now() + 1000,
        backOff: (failTimes) => failTimes * 1000,
        maxFailures: 100,
        // repeatTimes: Infinity,
        // repeatUntil => Date Timestamp,
        // repeatDelay: 500, //Milisoconds
        // success: ()=>{},
        // failure: ()=>{}
      }
    );
```

an example using foxx request

```
 const transaction = await Transaction({
        action: function (params) {
          const response = request({
            method: 'post',
            url: `/_db/${db._name()}/_api/foxx/scripts/postEntry`,
            qs: {
              mount: '/marketing',
            },
            body: {
              Url: params.Url,
              params.Params,
            },
            json: true,
          });

          const entry = response.json;

          if (!entry._key) {
            throw `${entry.errorMessage || 'Error'}`;
          }
          return entry;
        },

        writes: [],
        params: {
            Url: '/marketing/end/point',
        Params: {
          // ... the params you want to pass
        }
        },
      });
```

## Environment Variables

You notice the use of environment variables. This is important for security and sharing variables between server and the db application.

The example below uses ubuntu server

in ` /etc/init.d/arangodb3` add the following at the top. (Change the directory to your environment variables source file.)

```

if [ -r ~/.profile ]; then
   source ~/.profile
fi

```

If the method does not work. You can edit `/lib/systemd/system/arangodb3.service`. This is a [systemd.service file](https://www.freedesktop.org/software/systemd/man/systemd.service.html). Add `EnvironmentFile=/etc/env`

Make sure you proceed to create the file to look like this.

```
FOO="BAR"
```

Finaly, restart ArangoDb.

type the following command `source ~/.profile` and then restart the arangodb service

on mac development environment, edit `cat /Applications/ArangoDB3-CLI.app/Contents/MacOS/ArangoDB3-CLI` and add your env variables source files

```
#!/bin/bash
WD=$(dirname "$0")
# We are in Contents/MacOS. However everything is located under Contents/Resources
ROOTDIR=$(cd "$WD" && cd "../Resources" && pwd)
# create start script


source ~/.bash_profile

```

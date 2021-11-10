---
id: installation
title: Getting Started
sidebar_label: Installation
---

The first thing will be to install a new sails project and then install sails-arangojs

## Install Sails

Sails-ArangoJs works with sails version 1.0 and above. Please checkout the [sails documentation](https://sailsjs.com/) for more about sails, concepts and installation guides.

### Install sails globally

```
npm install sails -g
```

### Start a new sails project

```js
sails new sails-arangojs-example &&  cd sails-arangojs-example
```

### Replace the orm hook

Remove sails-hook-orm from your package.json to avoid conflict and install sails-orm hook.

```sh
$ npm install @cloudhub-js/sails-orm-hook
```

Sails-ArangoJs uses a customized orm hook cloned from the [official orm hook for sails js](https://github.com/balderdashy/sails-hook-orm). This step is a must. Otherwise the adapter will not work.

ArangoDB being a Graph/Document/Key-Value Database, small changes had to be done on the orm to accomodate this nature of the database. It also allows us to harness the powerful features of a Graph Database right away from sails. No changes were made on the hook-orm despite cloning it to another module (sails-orm-hook). This was done to bring on board waternile orm as a package.

```diff
    "dependencies": {
    -    "sails-hook-orm": "^2.0.0-16",
    +    "@cloudhub-js/sails-orm-hook": "^3.0.0-15"
    },
```

## Install Sails-ArangoJs

To install this adapter, run:

```sh
$ npm install @cloudhub-js/sails-arangojs
```

## Configure Datastore.js

Then [connect the adapter](https://sailsjs.com/documentation/reference/configuration/sails-config-datastores) to one or more of your app's datastores.

go to `config/datastore.js` and edit.

```
  default: {
    adapter: '@cloudhub-js/sails-arangojs',
    url: 'arangodb://user:password@localhost:2424/db',
    graph: true,
  },

  // Other adapters
  // mysqlDatabase: {
  // adapter: 'sails-mysql',
  //  url: 'mysql://admin:user@password:3306/main',
  // },
```

When graph is true, make sure migrations are not `alter` but `safe`

Just like in other sails projects, production configuration will be put in `config/env/production.js`

## Configure Model.js

Under config.models, make it look like below if you are using sails-arangojs as ther default adapter. Since ArangoDB is schemaless we wont forget to tell sails we are using a schemaless DB.

```
 attributes: {
    createdAt: { type: 'number', autoCreatedAt: true },
    updatedAt: { type: 'number', autoUpdatedAt: true },
    id: { type: 'string', columnName: '_key' },
    _id: { type: 'string' },
 },
 schema: false,
```

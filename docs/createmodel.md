---
id: createmodel
title: Creating Models
sidebar_label: Creating Models
---

IF you're new to sails, models are the abstractions between `tables` if we were to speak in a traditional RDBMS language. It presents the schema of your object.

Visit [Models & ORM](https://sailsjs.com/docs/concepts/models-and-orm) in the docs for more information about using models, datastores, and adapters in your app/microservice.

## Creating Models in Sails

The best way to create a new model in sails is to use the CLI.

```sh
    sails generate api user
```

## defaultDatastoreBuild

This property allows yout to define the datastores in which the model will be created. The default option is `only`. Meaning the model will be built on the `default` datastore only.

The available options are:

| Option  | Meaning                         |
| :------ | :------------------------------ |
| only    | Build on default datastore only |
| include | Build in all datastores         |
| exclude | Build in all except `default`   |

```js
  defaultDatastoreBuild: 'include',
  attributes: {
        ...
  }

```

## Adding attributes

Below, we add full_name, email, and password properties to our model.

```js
attributes: {
      full_name: { type: 'string' },
      email: {type: 'string', unique: true, required: true },
      password: {type: 'string'}
 }

```

By default, if `graph` is enabled in the datastore config, the email index with `sparse false` will be created the moment sails is lifted

## Edge Definitions

Edge definitions are put in an edge classType to tell the graph the direction from which an edge makes.

```js
  classType: 'Edge',
  edgeDefinition: {
    from: ['airport'],
    to: ['airport']
  },

  attributes: {
    departureTime: {
      type: 'string'
    },
    ....


```

In the above example, an edge definition shows a link from one airport to another.

## Additional Features

When defining Models, you can specify the class of the model to be mapped on arangodb. Its alos easy to create custom indexes with a combination of field attributes for your data integrity.

```
  classType: 'Vertex', //Either of Vertex, Edge (default is Vertex)
  indexes: [
    { fields: ['Field1', 'Field2']},
    { fields: ['Field2', 'Field3'], unique: true },
  ],
  attributes: {
       username: { type: 'string' },
  }

```

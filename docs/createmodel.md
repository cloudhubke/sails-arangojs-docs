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

## tenantType

In multi tenancy databases, We can define the tenants in which this model will be built. It defaults to `['default']`, Meaning the model will be built on the `default` datastore only.

If specified, all tenant datastores with the specified tenant type property will have the datastore built in them.

```js
  tenantType: ['default', 'school'],
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

## Schema Validations

Since version 3.7.1, ArangDB allows to define schema validations for newly inserted documents or updated documents. This is very useful. This is automatically integrated into sails-arangojs by checking at the `rules` property of a model attribute.

The rules attribute should be an object that follows the [JSON Schema Conventions](https://json-schema.org/understanding-json-schema/index.html)

the `required` property is automatically populated from `required, defaultsTo` properties of an attribute.

To allow for schemaless (Or avoid validations) just add `shemaValidation: false` property to the model.
By default, a model has `additionalProperties: true`. To enforce validation or opt out of additionalAtrributes, add `additionalProperties: false` property to the model or `additionalProperties: { type: "string" }`

`json` attributes should be accompanined by `defaultsTo` property to differentiate between arrays and objects.

`isIn` model validation is converted to `enum`.

```
  //shemaValidation: false,
  //additionalProperties: false,

  attributes: {
    RefNo: {
      type: 'string'
      rules: {
        pattern: `^[^A-Z\s]+$` // Dont allow capital letters and spaces
        }
      },
      NationalId: { type: 'string', required: true, rules: {
        pattern: '^[0-9]+$'
      }},
      Address: {
        type: 'json'
        defaultsTo: {},
        rules:{
          properties: {
            LineI: {type: 'string'},
            Phone: {type: 'string'},
            Email: {type: 'string'}
          },
          required: ['Phone', 'Email']
        }
      }

  }

```

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

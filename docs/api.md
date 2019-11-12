---
id:create
title: CRUD API
sidebar_label: create
---

Every model depending on the `classType` exposes a number of methods to perform crud operations on the database. The following methods are available for classType `Vertex`. A vertex in ArangoDB is just a normal document. It may or not be connected to another vertex through an edge. For more information abbout graphs go to the [official documentation](https://www.arangodb.com/docs/stable/drivers/js-reference-graph.html)

## Compatibility

This adapter implements the following methods:

| Method     | Status | Category |
| :--------- | :----- | :------- |
| create     | Done   | DML      |
| createEach | Done   | DML      |
| update     | Done   | DML      |
| upsert     | Done   | DML      |
| destroy    | Done   | DML      |
| find       | Done   | DQL      |
| count      | Done   | DQL      |
| sum        | Done   | DQL      |
| avg        | Done   | DQL      |
| normalize  | Done   | DQL      |
| define     | Done   | DDL      |
| drop       | Done   | DDL      |

## Create

The method used to insert a document into a collection.

### Usage

```js
const created = await User.create({
  full_name: "Angela W.",
  email: "angelow@gmail.com",
  password: "xxxxx"
}).meta({
  fetch: true
});

// Do something with created record.
```

the `{meta: true}` option is just one of the options available when impletementing the methods in waterline. Its beyond the scope of this documentation. If you want to learn more about this options, please visit the [Sails Documentation](https://sailsjs.com/documentation/reference/waterline-orm/models/create)

In our examples, we shall use the `async` and `await` for asynchrounous implementation. Its worth noting that you call as well use call back functions.

The above code is the same as the code below

```js
await User.create({
  full_name: "Angela W.",
  email: "angelow@gmail.com",
  password: "xxxxx"
}).exec(function(error, created) {
  if (error) {
    //handle errorr
  }
  // handle the created record.
});
```

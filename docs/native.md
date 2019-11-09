---
id: native
title: Going Native
sidebar_label: Native Methods
---

You may want to use the arangojs driver directly without the absraction of the adapter. You can do so my importing the dbConnection object in your file.

For more information on arangojs, [Visit the ArangoJs driver documentation](github.com/arangodb/arangojs).

## Basic usage example

In the following exaple, we use the `user` model to import the dbConnection object in to our Controller file.

We can then use is normally as if we imported from `arangojs`

```

    // Modern JavaScript
    const { dbConnection, aql } = User.getDatastore().manager;
    (async function() {
    const now = Date.now();
    try {
        const cursor = await dbConnection.query(aql`
        RETURN ${now}
        `);
        const result = await cursor.next();
        // ...
    } catch (err) {
        // ...
    }
    })();


```

## Executing a transaction

In SQL, transactions are started with explicit BEGIN or START TRANSACTION command. Following any series of data retrieval or modification operations, an SQL transaction is finished with a COMMIT command, or rolled back with a ROLLBACK command. There may be client/server communication between the start and the commit/rollback of an SQL transaction.

In ArangoDB, a transaction is always a server-side operation, and is executed on the server in one go, without any client interaction. All operations to be executed inside a transaction need to be known by the server when the transaction is started.

There are no individual BEGIN, COMMIT or ROLLBACK transaction commands in ArangoDB. Instead, a transaction in ArangoDB is started by providing a description of the transaction to the db.\_executeTransaction JavaScript function:

```
    const { dbConnection, aql } = User.getDatastore().manager;

    dbConnection._executeTransaction(description);
```

### Transaction Example

The [official driver documentation](https://www.arangodb.com/docs/stable/drivers/js-reference-database-transactions.html) has more exmples and details on executing transactions in ArangoJs.

```

    const { dbConnection, aql } = User.getDatastore().manager;

    const action = String(function(params) {
    // This code will be executed inside ArangoDB!
    const { query } = require("@arangodb");
    return query`
        FOR user IN _users
        FILTER user.age > ${params.age}
        RETURN u.user
        `.toArray();
    });

    const result = await db.executeTransaction("_users", action, {
    params: { age: 12 }
    });
```

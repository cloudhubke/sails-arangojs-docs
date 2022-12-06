---
id: let
title: Let Method
sidebar_label: let
---

## Let Method

The method used to declare variables to be used later in a query statement. The Statment can be used later in the `where`, `select` and other places, using the `$` sign.

### Usage

```js
const let = await Collection.let({
  Foo: "Bar",
}).find({
  Foo: "$FOO",
});
```

This Allows us to used ArangoDb Functions, For Example below we used the date functions. Note the use of the dollar sign when refering to the variable

```js
const loans = await Loan.let({
  Diff: "DATE_DIFF(record.ApprovalDate, DATE_NOW(), 'months', true)",
})
  .find()
  .where({
    LoanStatus: "OUTSTANDING",
    $Diff: { $gt: "$record.PaidMonths" },
  });
```

You can also add the $ sign before `record` to tell js this is not a string value

Example

```js
const count = await _Accounttransaction(dsName)
  .let({
    from: "$record._from",
  })
  .count({
    "FromAccount._id": { $ne: "$record._from" },
  });
```

This is translated to:

```
FOR record in accounttransaction
LET from = record._from

 FILTER record.FromAccount._id != record._from COLLECT WITH COUNT INTO length RETURN length
```

## WITHOUT $ SIGN:

```js
const count = await _Accounttransaction(dsName)
  .let({
    from: "record._from",
  })
  .count({
    "FromAccount._id": { $ne: "$record._from" },
  });
```

This is translated to:

```
    FOR record in accounttransaction
    LET from = 'record._from'

    FILTER record.FromAccount._id != record._from COLLECT WITH COUNT INTO length RETURN length
```

This is not the result we want.

IN OTHER WORDS JUST APPEND a $ sign of the value is NOT A STRING

## $ SIGN INFRONT OF KEYS

const count = await \_Accounttransaction(dsName)
.let({
from: '$record._from',
      })
      .count({
        '$FromAccount.\_id': { $ne: '$record.\_from' },
});

Translates:

```

FOR record in accounttransaction
LET from = record._from

 FILTER FromAccount._id != record._from COLLECT WITH COUNT INTO length RETURN length

```

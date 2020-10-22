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
    $Diff: { $gt: "record.PaidMonths" },
  });
```

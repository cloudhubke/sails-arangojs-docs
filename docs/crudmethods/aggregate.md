---
id: aggregate
title: Aggregate Documents
sidebar_label: Aggregate
---

## aggregate Method

The method used to aggregate documents in a collection using the `COLLECT & AGGREGATE` methods;

The aggregate criteria must be an object

### Usage

```js
const data = await Model.aggregate({
  $filter: { ...criteria },
  $collect: {
    id: "ProductCode"
  },

  $aggregate: {
    Weight: { $sum: "Weight" },
    Balance: { $sum: "Balance" },
    ProductName: { $min: "ProductName" }
  },

  $sort: { Weight: "DESC" },

  $return: {
    ProductCode: "$id",
    ProductName: "$ProductName"
    Weight: "$Weight",
    Balance: "$Balance",
  }
});

// Do something with created records.
```

### Operators

| Operator | Meaning |
| :------- | :------ |
| \$length | LENGTH  |
| \$sum    | SUM     |
| \$floor  | FLOOR   |
| \$avg    | AVG     |
| \$min    | MIN     |
| \$max    | MAX     |

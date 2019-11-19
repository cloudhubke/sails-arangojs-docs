---
id: aggregate
title: Aggregate Documents
sidebar_label: aggregate
---

## aggregate Method

The method used to aggregate documents in a collection using the `COLLECT & AGGREGATE` methods;

The aggregate criteria must be an object

### usage

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

// Do something with the data.
```

### Operators

All Arango functions are supported. For example;

| Operator | Meaning |
| :------- | :------ |
| \$length | LENGTH  |
| \$sum    | SUM     |
| \$floor  | FLOOR   |
| \$avg    | AVG     |
| \$min    | MIN     |
| \$max    | MAX     |

This means you just prefix the function with a `$`;

also variables should include the prefix `$`, if not.

the `$concat` string function required an array. eg

```
 {$concat: ["'Year: '": '$year']}

```

## Rules.

You can not use the `INTO` statement with `AGGREGATE`. You can only use `COLLECT` with `AGGREGATE`. Please refer to the [official documentation on the various ways that the COLLECT and the AGGREGATE](https://www.arangodb.com/docs/3.5/aql/operations-collect.html) function are used together.

### Other resourrces

- [Grouping data](https://www.arangodb.com/docs/3.5/aql/examples-grouping.html).

## Pileline

### \$filter

Can be used to filter statement before `COLLECT`

### \$collect

Used to collect or group similar items together.

### \$intogroup

Create a group from the collection in a variable `group` which can be called down further in `AGGREGATE` or `RETURN` statements.

Example

```
  User.aggregate({
    $collect:{
      country: 'country',
      city: 'city',
    },
    intogroup: 'name',
    return {
      "country" : '$country',
      "city" : '$city',
      "userNames" : '$group'
    }
  })
```

The above intogroup statement is similar to:

```
FOR u IN users
  COLLECT country = u.country, city = u.city INTO groups = u.name
  RETURN {
    "country" : country,
    "city" : city,
    "userNames" : groups
  }
```

Or

```
FOR u IN users
  COLLECT country = u.country, city = u.city INTO groups = {
    "name" : u.name,
    "isActive" : u.status == "active"
  }
  RETURN {
    "country" : country,
    "city" : city,
    "usersInCity" : groups
  }
```

### \$withcountinto

Used to create a variable for counting groups similar to `COUNT(*)` in sql.

```
$withcountinto: length
```

is similar to

```
FOR u IN users
  COLLECT WITH COUNT INTO length
  RETURN length

```

### \$aggregate

Used to aggregate values and get the computed results in a variable that can be used in a `RETURN` statement;

```
const users = User.aggregate({
  $collect: {
      ageGroup: {$floor: 'age'}
  },
  $aggregate: {
    minAge: {$min: 'age'},
    maxAge: {$max: 'age'},
  },
  $return {
    ageGroup: '$ageGroup',
    minAge:  '$minAge',
    maxAge '$maxAge'
  }
})
```

is similar to

```
FOR u IN users
  COLLECT ageGroup = FLOOR(u.age)
  AGGREGATE minAge = MIN(u.age), maxAge = MAX(u.age)
  RETURN {
    ageGroup,
    minAge,
    maxAge
  }
```

### \$let

Can be used to declare a variable that can be used further into the statement.

Example

```
  $let: {
    length: {$length: '$group}
  }
```

if equivalet to

```
  LET length = LENGHT(group)
```

### \$sort

Can be used to sort results.

```
$sort: { length: 'DESC' },

```

is equivalent to

```
  SORT length DESC
```

### \$return

The Values you desire to return in form of an object. Remember to include the `$` sign for `COLLECTED` or `AGGREGATED` variables.

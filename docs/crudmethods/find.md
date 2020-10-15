---
id: find
title: Finding Documents
sidebar_label: find
---

## find Method

The method used to find documents in a collection given a criteria.

The criteria must be an object

### Usage

```js
const updated = await User.find({
  id: "3787778",
}).set({ full_name: "Angela W. K.", password: "zzzzz" });

// Do something with the records.
```

The above is equivalent to the below AQL:

```js
    FOR u in user
        FILTER u._key=='3787778'
        return u;
```

### Other Operators

| Operator  | Meaning                        |
| :-------- | :----------------------------- |
| \$gt      | >                              |
| \$lt      | <                              |
| \$gte     | >=                             |
| \$lte     | <=                             |
| \$ne      | !=                             |
| \$in      | IN                             |
| \$nin     | NOT IN                         |
| \$like    | LIke                           |
| \$notlike | NOT LIke                       |
| \$has     | HAS                            |
| \$betwen  | BETWEEN two values of an array |

`$has` is used to query fields of `Array<string> or Array<number>` example {Roles:{\$has:'Admin'}} will get users that has a role of Admin supposing the `Roles` field has a format of ['Admin', 'Owner' ...]

### \$lt Example

```js
const students = await Student.find({
  age: { $lt: 15 },
});
```

### \$like Example

```js
const users = await User.find({
  email: { $like: "angela%" },
});
```

The example above will find all records that starts with 'angela' in the email field.

### Wild card search

```js
    const users  = await User.find({
        email: {$like '%angela%'}
    })
```

## Sorting

The sort attribute can either be a string in form of `id ASC` or `id DESC` and it can also be an array of objects in form of;

```js
[{ id: "ASC", name: "DESC" }];
```

Example

```js
const documents = await Product.find({
  price: { $gt: 2000 },
}).sort("price ASC");
```

This can also be written as

```js
const documents = await Product.find({
  price: { $gt: 2000 },
}).sort([{ price: "ASC" }]);
```

## Limit && Skip

Skip and limit can be used for pagination.

The followitg methods will return 5 records in page 3.

```js
const documents = await Product.find({
  price: { $gt: 2000 },
})
  .limit(5)
  .skip(2)
  .select(["ProductName"]);
```

## Selecting Attributes

Please refer the `select` method on how to specify the attributes you would like to return by specifying an array of attributes.

```js
const documents = await Product.find({
  price: { $gt: 2000 },
})
  .limit(5)
  .select(["ProductName"]);
```

## Using ArangoDB Functions

You can use a variety of functions to filter the records in a collection by functions. For example the `LENGTH()` Function in ArangoDb returns the length of a string or an array.

The Following is an axample of how to use functions

```js
const documents = await Collection.find({
  "LENGTH(record.ArrayField)": { $gt: 5 },
}).limit(5);
```

The above will querry by filtering the `ArrayField` field, where the array length is greater than 5.
Please note the `record.` part. It is important to show we are refering to the currect document in the query.

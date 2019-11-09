---
id: findOne
title: Finding Documents
sidebar_label: findOne
---

## findOne Method

The method used to get a single document in a collection given a criteria. The criteria is normally an index query eg. id field.

The criteria must be an object.

### Usage

```js
const updated = await User.findOne({
  id: '3787778',
});

// Do something with created records.
```

The method returns a single document in object format or null if none was found.

## Operators

### Equal

The following example,

```js
const user = await User.findOne({
  email: 'angelow@gmail.com',
  password: 'yyyy',
});
```

is equivalent to AQL

```js
    FOR u in user
        FILTER u.email=='angelow@gmail.com' AND password=='yyyy'
        return u;
```

### Other Operators used in the find statement

The below operators can be combined just as they are used in the find statement.

| Operator | Meaning                        |
| :------- | :----------------------------- |
| \$gt     | >                              |
| \$lt     | <                              |
| \$gte    | >=                             |
| \$lte    | <=                             |
| \$ne     | !=                             |
| \$in     | IN                             |
| \$nin    | NOT IN                         |
| \$like   | LIke                           |
| \$has    | HAS                            |
| \$betwen | BETWEEN two values of an array |

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
  email: { $like: 'angela%' },
});
```

The example above will find all records that starts with 'angela' in the email field.

### Wild card search

```js

    const users  = await User.find({
        email: {$like '%angela%'}
    })
```

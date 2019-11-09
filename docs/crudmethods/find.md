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
  id: '3787778',
}).set({ full_name: 'Angela W. K.', password: 'zzzzz' });

// Do something with created records.
```

The above is equivalent to the below AQL:

```js
    FOR u in user
        FILTER u._key=='3787778'
        return u;
```

### Other Operators

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

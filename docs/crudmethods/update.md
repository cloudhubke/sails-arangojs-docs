---
id: update
title: Update
sidebar_label: update
---

## update Method

The method used to update one or more documents that meets a certain criteria

### Usage

```js
const updated = await User.update({
  email: "angelow@gmail.com"
})
  .set({ full_name: "Angela W. K.", password: "zzzzz" })
  .fetch();

// Do something with updated records.
```

The .fetch() method will make sure that the method returns the updated records in an array format.

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
  age: { $lt: 15 }
});
```

### \$like Example

```js
const users = await User.find({
  email: { $like: "angela%" }
});
```

The example above will find all records that starts with 'angela' in the email field.

### Wild card search

```js

    const users  = await User.find({
        email: {$like '%angela%'}
    })
```

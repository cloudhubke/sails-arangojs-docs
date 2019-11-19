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

## .Fetch()

The .fetch() method will make sure that the method returns the updated records in an array format.

### Filter Operators

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
const students = await Student.update({
  age: { $lt: 15 }
}).set({
  AllowedAccess: true
});
```

### \$like Example

```js
const students = await User.update({
  paid: true
}).set({
  AllowedAccess: true
});
```

The example above will update all records that starts with 'angela' in the email field.

## Method Chaining vs Parameters Array

In the above examples, we have used method chaining tp update our documents. However, it is possible to use other methods. Example:

```js
const students = await User.update(
  {
    paid: true
  },
  {
    AllowedAccess: true
  }
).fetch();
```

## Other Data Manipulation Operators

The following are some of the implemented data manipulation operators `update()` and `updateOne()` methods.

| Operator     | Operation                                                           |
| :----------- | :------------------------------------------------------------------ |
| \$inc        | Increase or decrease a value                                        |
| \$inc        | Increase or decrease a value                                        |
| \$pop        | Remove last item of array                                           |
| \$shift      | Remove first item of array                                          |
| \$unshift    | Add Item in the front of an array                                   |
| \$unshiftset | Add Item in the front of an array if it does not exist ih the array |
| \$push       | Add Item at the end of an array                                     |
| \$pushset    | Add Item at the end of an array if it does not exist in the array   |
| \$pull       | Remove items from an array, accepts arrray                          |

## More examples

More examples of using this operator can be found in the [updateOne method](updateOne)

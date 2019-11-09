---
id: updateOne
title: Update One
sidebar_label: updateOne
---

## updateOne Method

The method used to update One record in a collection that meets a certain criteria. Mostly the criteria is search by a primary key.

### Usage

```js
const updated = await User.updateOne({
  id: '3787778',
}).set({ full_name: 'Angela W. K.', password: 'zzzzz' });

// Do something with created records.
```

by default, the .fetch() method is passed. The method returns the updated record in an object format.

### Update Operators

The following key words are implemented in the update query

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

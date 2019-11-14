---
id: avg
title: Average of a numeric attribute
sidebar_label: avg
---

## avg Method

The method used to get the average in a model attribute. A `find` criteria can be used to filter before finding an average.

the attribute must be of type `number`

### Usage

```js
const avg = await User.avg("age");

// Do something with avg
```

```js
const avg = await User.avg("age", { age: { $gt: 12 } });

// Do something with avg
```

Please refer to the find methods for the operators that can be implemented in the criteria.

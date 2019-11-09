---
id: count
title: Count Documents
sidebar_label: count
---

## count Method

The method used to count the number of documents in a collection. A `find` criteria can be used to count with a filter.

To count all records, use an empty criteria. Ie `count()`or `count({})`

### Usage

```js
const documents = await User.count({});

// Do something with created records.
```

```js
const documents = await User.count({ age: { $gt: 12 } });

// Do something with created records.
```

Please refer to the find methods for the operators that can be implemented in the criteria.

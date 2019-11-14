---
id: sample
title: The sample of a numeric attribute
sidebar_label: sample
---

## sample Method

The method used to get sample records from your collection. A `filter` [criteria](crudmethods/find.md) can be used to filter before sampling.

Please refer the `find` method on how to use the filter criteria.

The `select` method can be used to specify the attributes you would like to return.

### Usage

```js
const documents = await Product.sample({
  price: { $gt: 2000 }
}).limit(5);

// Do something with the documents.
```

The above method samples the product collection for 5 documents.

```js
const documents = await Product.sample({
  price: { $gt: 2000 }
}).limit(5).select(['ProductName])

// Do something with created records.
```

The above method samples the `price` attribute of the model `cart` where `category` of the products is `groceries`.

Please refer to the find methods for the operators that can be implemented in the criteria.

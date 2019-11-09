---
id: sum
title: The sum of a numeric attribute
sidebar_label: sum
---

## sum Method

The method used to get the summation in a model attribute. A `find` criteria can be used to filter before finding an average.

the attribute must be of type `number`

### Usage

```js
const documents = await Cart.sum('price');

// Do something with created records.
```

The above method sums the `price` attribute of the model `cart`.

```js
const documents = await Cart.sum('price', { category: 'groceries' });

// Do something with created records.
```

The above method sums the `price` attribute of the model `cart` where `category` of the products is `groceries`.

Please refer to the find methods for the operators that can be implemented in the criteria.

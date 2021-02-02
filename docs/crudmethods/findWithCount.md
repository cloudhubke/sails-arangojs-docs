---
id: findWithCount
title: Finding documents and count property
sidebar_label: findWithCount
---

## findWithCount Method

The method used to get a documents in a collection given a criteria. the result is an object with properties documents<array> and count<number>

The criteria must be an object. This method is ideal for pagination. Refer to the find method for criteria usage.

### Usage

```js
const docs = await Member.findWithCount({
  County: "Nairobi",
});

// {documents: [...], count: 500}

// Do something with record;
```

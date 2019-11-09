---
id: destroy
title: Update One
sidebar_label: destroy
---

## destroy Method

The method used to delete a document or documents from a collection.

### Usage

```js
const deleted = await User.destroy({
  id: '3787778',
}).fetch();

// Do something with created records.
```

if .fetch() method is passed. The method returns the deleted documents.

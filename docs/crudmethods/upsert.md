---
id: upsert
title: Upserting Documents
sidebar_label: upsert
---

## upsert Method

The method used to update a document in a collection. If the record does not exist, its created.

### Usage

```js
const updated = await User.upsert({
  id: '3787778',
})
  .set({ full_name: 'Angela W. K.', password: 'zzzzz' })
  .fetch();

// Do something with created records.
```

if fecth() is added, an array of upserted documents is returned.

Please refer to the update methods for the operators that can be implemented.

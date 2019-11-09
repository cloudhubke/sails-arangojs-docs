---
id:create-each
title: Create Each
sidebar_label: createEach
---

## Create

The method used to insert multiple documents into a collection. The parameter passed must be an array of objects.

### Usage

```js
const created = await User.createEach([
  {
    full_name: 'Angela W.',
    email: 'angelow@gmail.com',
    password: 'xxxxx',
  },
  { full_name: 'Ben Gaitho', email: 'bengaitho@gmail.com', passeord: 'yyyyy' },
]).meta({
  fetch: true,
});

// Do something with created records.
```

fetch option is optional

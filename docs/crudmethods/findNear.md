---
id: findNear
title: Finding Documents
sidebar_label: findNear
---

## findNear Method

This is a Geospatial method that can be used to calculate the distance between coordinated.

The criteria must be an object. and must have a radius attribute.

The field type must be a geoJson object eg `[ 36.8868117, -1.21821 ]`

### Usage

```js
const location = {
  latitude: 1.29230234,
  longitude: -37.78981298
};

const stores = await Store.findNear(
  { StoreLocation: location, radius: 10000 },
  { select: ["StoreName", "Location"] }
).limit(20);

// Do something with stores.
```

The method will return documents in array of model attributes plus a `distance` attribute;

You can apply the sort and limit methods.

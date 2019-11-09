---
id: testing
title: Testing
sidebar_label: Testing
---

## Testing

The following featers interfaces are implemented.

```
    "interfaces": [
      "semantic",
      "queryable",
      "migratable",
      "sql",
      "graph"
    ],
    "features": [
      "unique"
    ]

```

Clone the repo, create a testdb and run

```
 WATERLINE_ADAPTER_TESTS_URL=arangodb://root@localhost:8529/testdb npm test

```

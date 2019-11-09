---
id: graph
title: Graph
---

## graph databases methods:

| Method              | Status | Category |
| :------------------ | :----- | :------- |
| createEdge          | Done   | DML      |
| getOutboundVertices | Done   | DQL      |
| getInboundVertices  | Done   | DQL      |

## createEdge Method

The following is an example of creating an edge.

```

   const edgeproperties = {
        Year: 2008,
        Month: 1,
        Day: 1,
        DayOfWeek: 2,
        DepTime: 644,
        ArrTime: 866,
        DepTimeUTC: '2008-01-01T11:04:00.000Z',
        ArrTimeUTC: '2008-01-01T13:06:00.000Z',
        UniqueCarrier: '9E',
        FlightNum: 2938,
        TailNum: '87979E',
        Distance: 444,
      };

      const from_id = 'airport/00M';
      const to_id = 'airport/00R';

      Flight.createEdge(
        edgeproperties,
        {
          from: from_id,
          to: to_id,
        },
        (err, edge) => {
          if (err) {
            return done(err);
          }

          assert.equal(edge._from, `${from_id}`);
          assert.equal(edge._to, `${to_id}`);
      })
```

## getOutboundVertices && getInboundVertices Methods

The following is an example of getting vertices connecting to a node

```
     //Flights connecting from an airport
     const airports = await Airport.getOutboundVertices(['flights], 'airport/00M');

     // or

    //Flights connecting to an airport
    const airports = await Airport.getInboundVertices(['flights], 'airport/00M');

```

the above will return an array of nodes and edges. [{vertex: {...}, edge:{...}}, ...]

You can filter Vertices and Edges using .whereVertex({...}) and whereEdge({...}) methods.

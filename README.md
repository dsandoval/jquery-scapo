# jquery-scapo
jQuery plugin: Nested select combo and populated by json

## Examples
### Simple Populate Example
```javascript
    var data1 = [
      {'id': 1, 'name':"A"},
      {'id': 2, 'name':"B"},
      {'id': 3, 'name':"C"}
    ];

    $("#select1").scapo({
        source: data1,
        value: "id",
        text: "name",
    });
```

Or ... 

```javascript
    $("#select1").scapo({
        source: "url-to-json-response",
        value: "id",
        text: "name",
    });
```

### Nested Populate Example
```javascript
    var data1 = [
      {'id': 1, 'name':"A"},
      {'id': 2, 'name':"B"},
      {'id': 3, 'name':"C"}
    ];

    var data2 = [
      {'id': 1, 'name':"A1", 'data_id':1 },
      {'id': 2, 'name':"A2", 'data_id':1 },
      {'id': 3, 'name':"A3", 'data_id':1 },
      {'id': 4, 'name':"B1", 'data_id':2 },
      {'id': 5, 'name':"B2", 'data_id':2 },
      {'id': 6, 'name':"C1", 'data_id':3 }
    ];

    var data3 = [
      {'id': 1, 'name':"A11", 'data_id':1 },
      {'id': 2, 'name':"A12", 'data_id':1 },
      {'id': 3, 'name':"A21", 'data_id':2 },
      {'id': 4, 'name':"A22", 'data_id':2 },
      {'id': 5, 'name':"A31", 'data_id':3 },
      {'id': 6, 'name':"B11", 'data_id':4 },
      {'id': 7, 'name':"B21", 'data_id':5 },
      {'id': 8, 'name':"C11", 'data_id':6 }
    ];

    $("#select2").scapo({
        source: data1,
        value: "id",
        text: "name",
        nested: {
          child: "#select3",
          by: 'data_id'
        }
    });

    $("#select3").scapo({
        source: data2,
        value: "id",
        text: "name",
        nested: {
          parent: "#select2", 
          child: "#select4",
          by: 'data_id'
        }
    });

    $("#select4").scapo({
        source: data3,
        value: "id",
        text: "name",
        nested: {
          parent: "#select3", 
          by: 'data_id'
        }
    });

```
## Author
Danilo Sandoval <dsandovalortiz@gmail.com>
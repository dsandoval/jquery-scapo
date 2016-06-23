# jquery-scapo
jQuery plugin: Nested select combo and populated by json

## Examples
### Simple Populate Example
```javascript
$("#element").scapo({
    source: "path-to-json",
    value: "json-object-value",
    text: "json-object-text",
});
```
### Nested Populate Example
```javascript
$("#grandfather").scapo({
    source: "path-to-json",
    value: "gf-json-object-value",
    text: "gf-json-object-text",
    child: '#father'
});

$("#father").scapo({
    source: "path-to-json",
    value: "fa-json-object-value",
    text: "fa-json-object-text",
    parent: {
        parent_id: "gf-json-object-value",
        by: "#grandfather"
    },
    child: '#children'
});

$("#children").scapo({
    source: "path-to-json",
    value: "fa-json-object-value",
    text: "fa-json-object-text",
    parent: {
        parent_id: "#father",
        by: "fa-json-object-value"
    }
});
```
## Author
Danilo Sandoval <dsandovalortiz@gmail.com>
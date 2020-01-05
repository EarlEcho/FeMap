# Node 中的数据交互

数据交互常用的两种方式：
GET：主要用于获取数据，数据放在 url 中进行传输，数据放在请求的头部报文中，容量小（<=32k）
POST：

## GET 请求的使用方式

```js
let http = require("http");
http.createServer((req,res) => {

}).listen(8888);
```

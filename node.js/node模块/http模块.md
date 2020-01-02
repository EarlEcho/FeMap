# HTTP 模块

Nodejs 作为一门服务器语言，那么 HTTP 模块肯定是重点咯！

http 模块中比较重要的几个点如下：

1. 服务器对象 - http.createServer();
2.

## 服务器对象

还是一样，先新建一个 index.js 文件，并引入这个 http 模块

```js
let http = require("http");
// 我们要启动一个服务首先要创建它 所以要使用到http.createServer()这个方法，该方法允许接受一个回调函数
http.createServer(() => {
  console.log("start");
});
```

但是光这样写肯定是不行哒，为啥呢，因为我们知道服务是需要运行在某个具体的端口上的，我们这里都没有指定端口，它如何运行起来呢？所以我们需要加上一个端口号

```js
let http = require("http");
// 我们要启动一个服务首先要创建它 所以要使用到http.createServer()这个方法，该方法允许接受一个回调函数
http
  .createServer(() => {
    console.log("start");
  })
  .listen(8888); // 运行在8888端口
```

那这样的话，就可以大致看得到效果了，控制台执行 `node index.js` 运行上述代码，即启动服务，这是我们可以发现光标在闪烁，说明服务跑起来了，接下来打开浏览器，访问 localhost:8888，可以看到页面一直在转圈圈，但是控制台就能看到我们打印出来的`start`。说明这个服务简单的跑起来啦～

接下来就要详细解释这个 createServer 啦，刚刚我们知道了 createServer 允许接收一个回调函数，而回调函数的参数是什么呢？

1. request - 请求的参数
2. response - 返回的参数

上面的例子可以修改成这个亚子：

```js
let http = require("http");
http
  .createServer((req, res) => {
    res.write("index"); // 返回一个index
    res.end(); // end必须有 表示现在请求完成了

    //  上面两句可以直接简写成：
    res.end("index1");
  })
  .listen(8888); // 运行在8888端口
```

基础的介绍完啦，我们接下来可以完成一个基础的小 🌰，利用 createServer 返回一个现有的页面(即使用 node 的 http 服务访问一个页面)
新建一个 index.html 文件，里面随便敲点文字再加个图。
具体实现如下：

```js
let http = require("http");
let fs = require("fs"); // 由于要显示html文件，即读取这个文件，那么肯定要用到我们之前学到的fs模块啦

http
  .createServer((req, res) => {
    console.log(req.url); // 请求的url地址
    fs.readFile(`./${req.url}`, (err, data) => {
      if (err) {
        console.error(err);
        res.wirteHead(404); // 返回一个404的状态码
        res.end("404 not Found");
      } else {
        // res.wirteHead(200); // 返回一个200的状态码，但是由于200是默认的东西，所以可写可不写。
        res.end(data);
      }
    });
  })
  .listen(8888);
```

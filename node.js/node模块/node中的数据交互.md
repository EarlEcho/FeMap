# Node 中的数据交互

数据交互常用的两种方式：

1.  GET：主要用于获取数据，数据放在 url 中进行传输，数据放在请求的头部报文中，容量小（<=32k）
2.  POST：

## GET 请求的使用方式

```js
let http = require("http");
http
  .createServer((req, res) => {
    console.log(req.url);
  })
  .listen(8888);
```

这里我们新建一个 html 页面，并结合同目录下的练习来一起看：

🔗—[Get 请求](../practice/get请求/form.html)

这里新建了一个 form 用于提交表单，请求方式为 get，请求地址是我们上面写的 8888 端口下的某个路径，我们点了提交之后就是把填写的数据发送到 method 指定的 8888 端口下的 submit 路径下。

我们现在可以来试验一下：（在 `practice/get` 请求的目录下）

1. 在`index.js`中写入上面 get 请求方式的代码
2. 在同目录下执行`node index`
3. 我们执行完毕后可以看到端口运行起来了，但是没有东西输出，这时我们在浏览器打开 `form.html`，输入用户名/密码并点击提交，这时我们就能在控制台看到我们提交的信息了，长这个样子：

```
/submit?username=Echo&password=123456
```

现在就到了处理数据的时候了，我们需要把获取到的用户名和密码处理出来，如果用 js 的方式处理大概是这样的：

1. `str.split('?')` -> 得到提交的一整串字符
2. `str.split('&')` -> 分别得到用户名和密码的字符串
3. `str.split('=')` -> 得到具体的字段以及对应的值

但是这样做呢就非常的麻烦啦，所以 node.js 为我们提供了更加便捷的方式。这个方法就在 `url` 模块里啦，所以在上面 get 请求方式的代码 的基础上我们改成下面这样：

```js
let http = require("http");
let url = require("url");
http
  .createServer((req, res) => {
    // 这里我们可以新建一个html页面模拟一下数据提交
    // console.log(req.url);
    //  submit?username=Echo&password=123456
    console.log(url.parse(req.url, true));
    // true的意思表示 自动帮我们处理url的参数
    //  所以我们可以直接得到form.html给我们发送的参数
    let { pathname, query } = url.parse(req.url, true);
    console.log(pathname, query);
    // 这里打印出来的pathname就是我们发起请求的路由
    // query就是后面跟着的username / password参数
    // 这样我们就可以很轻易的拿到获取的数据啦
  })
  .listen(8888);
```

这样就大体完成了一个 get 请求啦～～

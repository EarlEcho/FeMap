let http = require("http");
let url = require("url");
http
  .createServer((req, res) => {
    // 这里我们可以新建一个html页面模拟一下数据提交
    // console.log(req.url);
    // console.log(url.parse(req.url, true));
    // true的意思表示 自动帮我们处理url的参数
    //  所以我们可以直接得到form.html给我们发送的参数
    let { pathname, query } = url.parse(req.url, true);
    console.log(pathname, query);
  })
  .listen(8888);

//   重新启动后我们可以看到一大串的参数。

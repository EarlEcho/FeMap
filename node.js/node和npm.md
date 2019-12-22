# NPM 包管理

前言：在我们没有使用 npm 之前，我们一般使用 `script` 标签在文件中引入资源文件，如下：

```js
<script src='js/vue.js'>
```

## npm 基础

现在我们可以：

```js
> npm init // 初始化一个项目
```

根据提示填写完了一直下一步，就完成了初始化，这时候我们就可以发现文件夹里多了一个 `package.json` 文件，大概就长这个样子：

```js
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Echo",
  "license": "ISC"
}
```

关于 npm 的一些基础命令如下：

```js
> npm install 依赖名    // 安装指定依赖
> npm i 依赖名    // 简写 - 安装指定依赖

// 执行完成后我们可以看到 `package.json` 中的dependencies多了我们刚刚安装的依赖的名称和版本号。
> npm uninstall 依赖名  // 卸载指定依赖
> npm un 依赖名    // 简写 -  卸载指定依赖
```

由于 npm 的服务器在国外，所以请求的时候会很慢，一般使用 `cnpm（国内淘宝镜像）`
命令行如下：

```js
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

这里有一个 tips，当我们的项目的依赖比较多的时候，如果重新安装依老是出现问题（这里的问题不包括代码原因，而是一直提示版本号不对啥的）我们应当使用 npm 来重新下载安装，取消使用 `cnpm`。但是在绝大部分时候安装单个依赖时，`cnpm` 是没有任何问题哒。

之后我们再需要用 `npm` 安装什么依赖的时候，就可以使用 `cnpm` 代替 `npm`

如果在一个项目中直接执行 `npm i`，则表示下载所有 package.json 中声明好了的依赖。

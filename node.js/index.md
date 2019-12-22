# Node.js

<!-- ## 一：使用Node.js的原因
1. 脱离浏览器运行JS
2. 后台API编写
3. Webpack, Gulp, Npm 等等打包工具均强依赖于Node
4. 中间层：服务器中负责IO读写的中间层服务器

## 二：Node.js中间层的优点
1. 性能优异
2. 异步IO
3. 处理数据
4. 安全性 -->

## 一：Node 环境的搭建

1. 安装 Node.js 可以去官网下载安装。
2. 进行 Node.js 的版本的升级 / 降级等

```js
  //  安装node的版本管理模块
>  sudo npm install n -g
```

3. 安装稳定版本或者实验性的最新版

```js
// 安装稳定版
>  sudo n stable
// 安装最新版
>  sudo n latest
// 版本号升级/降级 切换到指定版本
>  sudo n 版本号
```

4. 检测目前安装了哪些版本的 node 及 其他操作

```js
>  n // 直接输入n指令，会出现本机安装过的node版本，以及现在处在哪个版本。
>  n  版本号 // 切换版本（不会删除已经安装的其他版本）
>  sudo n rm 版本号 // 删除版本
```

5. 运行程序

```js
>  node xx.js
```

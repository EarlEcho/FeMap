# TypeScript简介及安装

## 一. What is TypeScript？

TypeScript可以理解成是JavaScript的超集，是加强版的JavaScript，它主要是提供了`类型系统`和对`ES6`的支持。

那么TypeScript有那些优势呢？
1. TypeScript 增加了代码的可读性和可维护性，类型系统可以帮助我们只要看函数的定义就知道如何使用，可以在编译阶段就发现大部分的错误，更加的“面向对象”编程。
2. TypeScript 非常包容，可以随心定制从简单到复杂的多种类型。
3. 生态圈活跃，你遇到的问题99%都可以从前人的经验中找到答案。

缺点也比较明显：
1. 学习成本高，因为接口 / 范型 / 枚举 / 类这些概念对前端来说并不是很熟悉。
2. 项目前期搭建的开发成本高，因为要写比较多的类的定义，但是对后期项目的维护是很有帮助的。
3. 集成和构建需要一定工作量。


## 二. 安装TypeScript

安装TypeScript的命令行如下所示：（注意MacOS需要加上sudo）
```npm install -g typescript```
该命令会在全局环境下安装`tsc`命令，所以我们就可以在任何位置使用`tsc`这个命令了。

安装好之后就是动手实践啦，俗话说得好：工欲善其事，必先利其器，所以在开始写代码之前一个好用的编辑器是必不可少的啦，这里我使用的是`Visual Studio Code`，它内置了对TypeScript的支持。

## Hello TypeScript

我们从一个简单的例子开始对TypeScript的认识：新建一个hello.ts的文件
并输入以下代码：
```js
function sayHello(person:string) {
    return 'Hello, ' + person; 
}
let user = 'Echo';
console.log(sayHello(user));
```
接下来我们执行这个hello.ts文件：
`tsc hello.ts`  
这个命令会编译hello.ts文件，编译结果是生成一个新的hello.js文件
这个新编译生成的hello.js文件长下面这个样子：
```js
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Echo';
console.log(sayHello(user));
```
TypeScript只是进行代码的静态检查，如果发现了代码的错误，那么在编译的阶段就会报错。
但是就算编译的过程中发生了错误，还是会生成新的js编译文件。
如果要在报错的时候终止js文件的生成，可以在`tsconfig.json`中配置 `noEmitOnError` 即可。

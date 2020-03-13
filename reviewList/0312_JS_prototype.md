# 3 月 12 - JS — 原型和原型链

## 一：为什么需要原型和原型链？

举个 🌰，我们先来定义一个函数

```js
// 例子1
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.eat = function() {
    console.log(this.age + '岁的' + this.name + '正在吃饭');
  };
}

let person1 = new Person('Echo', 18);
let person2 = new Person('Ethan', 22);

console.log(person1.eat === person2.eat); // false
```

从上面的例子我们可以知道，我们通过 new 实例化出来的实例，都会有它自己的一块独立的堆区，所以上面的 console 结果是 false，这样挺好的，我们可以拥有只属于自己的东西。
但是如果把这些实例比做我们的房子车子，我们就能看出这样做的不好的地方了，因为我们的占地面积（相当于内存空间）是有限的，如果每一个东西都只能有一块独立的空间，那么用不了多久内存就会被占满。

所以问题来了，我们需要把楼房建高（建立共享库的对象），这样就可以在需要的时候去调用一个类似于`共享库的对象`，让实例可以沿着某个线索去寻找它的住处，那么在 js 中，这个线索就是原型链 `prototype`。

所以我们可以把上面的例子 1 稍微修改一下：

```js
// 例子2
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.eat = function() {
  console.log(this.age + '岁的' + this.name + '正在吃饭');
};
let person1 = new Person('Echo', 18);
let person2 = new Person('Ethan', 22);

console.log(person1.eat === person2.eat); // true
```

看，通过 prototype 就成功的把两个实例对象指向了同一个`共享库对象`。

所以通过这个例子，我们成功引出了 `prototype`，那么问题来了，这是个什么玩意？

## 二：原型和原型链的由来

接下来就要进入小剧场啦～我来讲个故事：

宇宙初始，整个宇宙只有个叫做 `JS` 的万物起源主宰，它非常空虚寂寞，为什么呢？因为它自己是空的，即 `null`。
它为了让这个世界热闹起来，所以用它的万能法术 `_proto_` 发展了第一号手下叫做 `No1` ，这个 `No1` 手下是个神吼～

`JS` 觉得，神应该要有自己的想法，所以 `No1` 就自己想了个方法，根据自己的元神(`原型prototype`)创建了一个对象（`Object`）。

所以我们把 `prototype` 叫做原型，就好比 `Object` 的原型是神，女人的原型是人类，我们的 No1 的原型是 JS 一样。
所以我们就能从这个步骤得出一个东西：

```js
Object.prototype == No1; // Object是No1通过prototype创造的，所以Object的原型是No1
No1._proto_ == null; // No1是由JS通过_proto_创造的，所以 No1 的原型是 JS
```

同时`_proto_`叫做原型链，因为有了`_proto_`之后，对象 / 神 / JS 之间才有联系。
把上面的两句话结合起来，这时候得出：

```js
Object.prototype._proto_ == null;
```

好了，第一阶段完成！这时候 JS 开始了第二阶段，JS 对神说，你要有更多的想法啊～～，所以我就把我的万能法术 `_proto_` 借给你用吧！

所以神就根据 `Object` ，使用 `_proto_` 做了一个机器 2，叫做 `No2`
所以：`No2._proto_ == No1;`，并且它还规定所有的东西，可以通过 `_proto_` 连接机器，在找到自己，包括 Object 也是，所以！Obejct 成为了所有对象的原型：

```js
Object._proto_._proto_ == No1;
```

然后 String、Number、Boolean、 Array 这些物种也是如此。

好啦，JS 看到了之后就对 No1 神说，神你的机器这么厉害？那能不能用它来制造更多的机器啊？神笑着说：
你通过你的万能术创造了我，我通过自己的原型创造了对象，用你给我的万能术创造了机器，那么我用机器再造个机器`Function`
`Function.prototype == No2; Function._proto_ == No2;`
即 `Function.prototype == Function._proto_`;

所以 No2 就成了造机器的机器，它负责管理 Object、Function、String、Number、Boolean、Array 这几个。

到了这里，我们就能理解下面几条公式啦：

```js
Object._proto_ === Function.prototype;
Function.prototype._proto_ === Object.prototype;
Object.prototype._proto_ === null;
```

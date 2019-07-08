

# localStroage / sessionStorage / cookie 的区别和应用

webStroage分为：本地存储 和 服务器存储

- 其中本地存储分为两种类型：LocalStroage / sessionStrage / cookie
- 服务器存储有：session

这里主要介绍的是本地存储

## **一. LocalStroage**

* 生命周期：永久
* 失效方式：用户手动清除
* 大小：一般为5M
* 存储位置：仅在浏览器存储
* 是否和服务器通信：否
* 优点： 储存空间大 / 节省网络流量 / 可在本地直接获取 / 不需要与服务器进行交互

## **二. SessionStroage**

* 生命周期：仅在当前会话有效
* 失效方式：关闭页面或者浏览器后失效
* 大小：一般为5M
* 存储位置：仅在浏览器存储
* 是否和服务器通信：否
* 优点：同localStroage

####  使用语法
LocalStroage和SessionStroage的使用语法相同：
* 存储 / 改变值 —— `localStroage.setItem('name', value`);  // 存储了一个name属性，其值为value
* 获取值 —— `localStroage.setItem('name');` // 获取name属性的值
* 删除值 —— `localStroage.removeItem('name');`
* 清空localStroage —— `localStroage.clear();`


**注：不同浏览器无法共享localStorage或sessionStorage，相同浏览器的相同域名和端口的页面间可以共享相同的 localStorage，但是不同页面或标签页间无法共享sessionStorage的信息。这里需要注意的是，页面及标签页仅指顶级窗口，如果一个标签页包含多个iframe标签且他们属于同源页面，那么他们之间是可以共享sessionStorage的。**


## **三. Cookie**

Cookies是服务器在本地机器上存储的小段文本并随每一个请求发送至同一个服务器。

* 生命周期：在设置的过期时间之前一直有效
* 失效方式：过期时间到自动失效
* 大小：4K左右，有个数限制，根据浏览器的不同而不同（一般不超过20个）
* 存储位置：仅在浏览器存储
* 是否和服务器通信：是，会携带在http头上
* 优点：
    1. 可以控制cookie的生命周期，这样被盗用的cookie很可能是一个失效的cookie
* 缺点
    1. cookie的长度和数量的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。
    2. 安全性问题，如果cookie被人获取到了，就可以获取到所有session信息。
    3. Cookie中只能保管ASCII字符串，假如需求存取Unicode字符或者二进制数据，需求先进行编码。Cookie中也不能直接存取Java对象。若要存储略微复杂的信息，运用Cookie是比较艰难的。
    4. Cookie需要客户端浏览器支持。假如客户端禁用了Cookie，或者不支持Cookie，则会话跟踪会失效。
    5. 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题	


举个🌰来说明语法：
在控制台输入`document.cookie`，可以看到的是

    "_ga=GA1.2.211643059.1557385698;dwf_sg_task_completion=False;"

可以知道cookie是一个个键值对（“键=值”的形式）加上分号空格隔开组合而成， 形如： "name1=value1; name2=value2; name3=value3"

* 获取 —— 使用`document.cookie`获取所有cookie，然后用正则匹配出想要的属性的值。
* 设置/修改 —— `document.cookie = name + "=" + 'name11' + ";expires=" + 'value111';`
* 删除 —— `setCookie(name, ' ', -1);`  // 设置要删除的cookie的expires为过去的时间即可


## **四：应用**

* localStroage —— 适合持久的存储方式 / 长期登录、判断用户是否已登录，适合长期保存在本地的数据
* sessionStroage —— 适合一次性会话的存储 / 敏感账号一次性登录
* cookie ——  保存登录时间、浏览次数等信息 / 判断用户是否登陆过网站，以便下次登录时能够实现自动登录（或者记住密码）


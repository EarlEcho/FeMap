# Mac 的环境变量

首先 Mac 使用 bash 作为默认 shell

## 一. Mac 系统的环境变量加载顺序

    1.  /etc/profile
    2.  /etc/path
    3.  ~/.bash_profile
    4.  ~/.bash_login
    5.  ~/.profile
    6.  ~/.bachrc

其中 1 和 2（/etc/profile 和 /etc/path）是系统级别的，系统启动就会加载。
后面几个是用户级别的环境变量，后面 3 个按照顺序读取。
如果~/.bash_profile 文件存在，那么后面的文件就会忽略不读了。如果~/.bash_profile 存在，才会依次读取后面的文件
~/.bashrc 没有上述规则，它是 bash shell 打开的时候载入的。

## 二. 设置 PATH 的语法

```
//中间用冒号隔开
export PATH=$PATH:<PATH 1>:<PATH 2>:<PATH 3>:------:<PATH N>
```

## 三. 配置

### 系统级别的配置

下面几个文件的设置是全局的，修改时需要 root 权限

1 `/etc/paths` （全局建议修改这个文件）

    编辑paths，将环境变量添加到paths中，一行一个路径
    Hint - 输入环境变量时，不用一个一个的输入，只要拖动文件到Terminal中就可以了

2 `/etc/profile` （建议不修改这个文件）

全局（公有）配置，不管哪个用户登录时都会读取这个文件

3 `/etc/bashrc` （一般在这个文件中添加系统级环境变量）

    全局（公有）配置，bash shell执行时，不管是何种方式，都会读取此文件

4 创建文件

1.  创建一个文件 -
    `sudo touch /etc/paths.d/mysql`
2.  用 vim 打开这个文件（如果是以 open -t 的方式打开，则不允许编辑）
    `sudo vim /etc/paths.d/mysql`
3.  编辑该文件，键入路径并保存（关闭该 Terminal 窗口并重新打开一个，就能使用 mysql 命令了）
    `/usr/local/mysql/bin`

据说，这样可以自己生成新的文件，不用把变量全都放到 paths 一个文件里，方便管理

### 用户级别的配置

这里需要注意的是 用户级环境变量在`Linux` 里面是 `.bashrc` 而 `Mac` 是 `.bash_profile`

1 ~/.bash_profile

若 bash shell 是以 login 方式执行时，才会读取此文件。
该文件仅仅执行一次!默认情况下,他设置一些环境变量
设置命令别名

> alias ll=\`ls -la`

设置环境变量：

> `export PATH=/opt/local/bin:/opt/local/sbin:$PATH`

2 ~/.bashrc 同上

如果想立刻生效，则可执行下面的语句：

> source 对应的文件

## Mac 下的命令别名配置

在 linux 下我们都习惯使用 ll、la、l 等 ls 别名，但是到了 Mac 系统下就不行了，所以我们需要重新配置下环境变量

1. 打开终端 进入用户级的环境变量文件
   `vim ~/.bash_profile`

输入：

```
alias ll='ls -alF' //
alias la='ls -A'  // 显示所有文件及目录 (ls内定将文件名或目录名称开头为"."的视为隐藏档，不会列出)
alias l='ls -CF'
```

保存并退出后执行：
`source ~/.bash_profile`

使用 MacOs 的终端时，唯一让人感觉不爽的就是 Tab 补全是区分大小的，所以查了资料就把这个问题搞定了。
在用户目录下创建 .inputrc 文件，内容为以下三行代码，保存后重启终端再次输入文件名 Tab 补全就可以忽略大小写。
set completion-ignore-case on
set show-all-if-ambiguous on
TAB:menu-complete

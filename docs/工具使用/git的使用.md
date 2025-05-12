# git的使用

## 1.安装

```bash
yum -y install git
```

## 2. 配置github

### 1. 配置用户名字和邮箱

```bash
git configs --global user.name ""
git configs --global user.email ""
```

### 2. 添加ssh密钥

>生成ssh key

```bash
ssh-keygen -t rsa -C "qiubing.it@gmail.com"
```

```
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:VToCPx+PioNCPBM23y9dshXUCkzy8mgwS9QbUE4V3bE qiubing.it@gmail.com
The key's randomart image is:
+---[RSA 2048]----+
|    o+=++o.oo.   |
|   . oo=o..oo.   |
|  + + oo=.*.E    |
| o = =.+ =.*     |
|  = o + S = .    |
| . o o + *       |
|  . . + =        |
|   .   o         |
|                 |
+----[SHA256]-----+

```

可以看到key存储在 `/root/.ssh/id_rsa.pub` 中

>查看key

```bash
cat /root/.ssh/id_rsa.pub
```

将key复制到github账号管理的SSH key界面中

![](Linux学习笔记/images/github SSH key配置.png)

>测试是否连接成功

```
ssh -T git@github.com
```


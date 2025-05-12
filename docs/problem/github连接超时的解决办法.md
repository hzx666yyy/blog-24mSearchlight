# github连接超时的解决办法

## **VPN使用环境下的解决方案**

1. 设置 -> 网络和Internet -> 代理   查看当前的端口
2. 设置Git端口号

```bash
git configs --global http.proxy 127.0.0.1:<你的端口号>
git configs --global https.proxy 127.0.0.1:<你的端口号>
```

## 未使用VPN时的解决方案

尝试取消Git的代理设置:

```bash
git configs --global --unset http.proxy
git configs --global --unset https.proxy
```


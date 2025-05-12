# 配置ip地址

## 1. 编辑配置文件

```bash
vim /etc/sysconfig/network-scripts/ifcfg-ens33
```

```
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=d9c2a5e5-ea6c-448a-954a-73c84192d172
DEVICE=ens33
ONBOOT=yes
IPDAAR=192.168.10.100
NETMASK=255.255.255.0
GATEWAY=192.168.10.2
DNS1=8.8.8.8

```

## 2. 重启网络

```bash
service network restart 
```

>参数说明：
>
>BOOTPROTO="static" # 使用静态IP地址，默认为dhcp
>
>ONBOOT=yes #设置网卡启动方式为 开机启动 并且可以通过系统服务管理器 systemctl 控制网卡
>
>IPADDR="192.168.152.11" # 设置的静态IP地址
>
>NETMASK="255.255.255.0" # 子网掩码
>
>GATEWAY="192.168.152.2" # 网关地址
>
>DNS1="8.8.8.8" # DNS服务器（默认添加就行）
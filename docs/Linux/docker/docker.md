# docker

[docker官网](https://www.docker.com/)

## 一. 安装docker

##  Centos9 Stream

### 1. 删除干净docker

```shell
dnf remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

### 2. 设置repository

```shell
dnf -y install dnf-plugins-core
//设置阿里仓库
dnf config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 3. 安装

```shell
dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 4. 配置镜像加速

在 `/etc/docker` 目录下编辑`daemon.json`文件来配置镜像加速

```shell
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://0zvhrp8y.mirror.aliyuncs.com"]
}
EOF
```

[**截止目前，国内仍然可用docker镜像加速器汇总**](https://www.kelen.cc/dry/docker-hub-mirror)

可用的 docker 镜像地址

```
https://docker.sunzishaokao.com
https://docker.xuanyuan.me/
https://docker.1ms.run
https://docker.1panel.live
https://hub.rat.dev
https://docker.wanpeng.top
https://doublezonline.cloud
https://docker.mrxn.net
https://docker.anyhub.us.kg
https://dislabaiot.xyz
https://docker.fxxk.dedyn.io
https://docker-mirror.aigc2d.com
```

配置完成后自启docker

```shell
systemctl daemon-reload
systemctl restart docker
```

---

## Centos7

### 1.更新yum

```bash
yum update

## 建议备份当前的 yum 源配置，以防万一需要恢复
sudo cp /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak

## 从阿里云下载 CentOS 7 的 yum 源配置文件并替换现有的配置
sudo curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo

## 清理旧的缓存并生成新的缓存
sudo yum clean all
sudo yum makecache

## 再次更新
sudo yum update
 
```

### 2. 安装docker所需要的依赖包

```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

### 3.设置docker的yum源

```bash
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

国内的阿里云的源, 服务器是海外可以不设置

```bash
sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
sudo sed -i 's/download.docker.com/mirrors.aliyun.com\/docker-ce/g' /etc/yum.repos.d/docker-ce.repo
```

### 4.查看仓库的所有docker版本

```bash
yum list docker-ce --showduplicates | sort -r
```

### 5. 安装docker

```bash
sudo yum install docker-ce
# 推荐
sudo yum install -y docker-ce-25.0.5 docker-ce-cli-25.0.5 containerd.io
```

---

## docker-compose

### 1.安装

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

### 离线安装

```bash
# 下载；docker-compose-`uname -s`-`uname -m` 查看版本；https://github.com/docker/compose/releases/tag/v2.18.1
cd /usr/local/bin
# 将下载好的文件传入到此文件夹下
# 重命名
mv docker-compose-linux-x86_64 docker-compose
# 加入执行权限
sudo chmod +x /usr/local/bin/docker-compose
# 查看docker-compose版本
docker-compose -v
```

### 镜像地址安装

```bash
# 指定路径【推荐】
sudo curl -L https://gitee.com/fustack/docker-compose/releases/download/v2.24.1/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
# 设置权限
sudo chmod +x /usr/local/bin/docker-compose
```

###启动docker并添加开机自启

```bash
systemctl start docker
# 开机自启
systemctl enable docker

systemctl restart docker
```

---



## 设置国内源

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://***替换为你的地址***.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker

```

```
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
  	"https://docker.sunzishaokao.com",
  	"https://docker.xuanyuan.me/",
	"https://docker.1ms.run",
	"https://docker.1panel.live",
	"https://hub.rat.dev",
	"https://docker.wanpeng.top",
	"https://doublezonline.cloud",
	"https://docker.mrxn.net",
	"https://docker.anyhub.us.kg",
	"https://dislabaiot.xyz",
	"https://docker.fxxk.dedyn.io",
	"https://docker-mirror.aigc2d.com"
  ]
}
EOF

```


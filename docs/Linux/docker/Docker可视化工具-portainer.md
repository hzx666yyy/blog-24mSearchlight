# Docker可视化工具-portainer

Portainer是一个可视化的Docker操作页面

## 安装Portainer



```bash
docker volume create portainer_data
docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
cd /usr/libexec/docker/
sudo ln -s docker-runc-current docker-runc
```

安装后,即可使用

通过本地浏览器访问：*http://服务器公网IP:9000*， 直接进入 Portainer 界面
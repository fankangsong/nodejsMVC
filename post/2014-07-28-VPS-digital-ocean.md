# DigitalOcean 月付5刀VPS评测

一年前我从Google Blogger迁移到VPS，在[DirectSpace](http://www.directspace.net/)租用了年付15美刀虚拟主机，一年多期间，directspace挂了一次，最近一次是因为垃圾邮件被误停机。

停机之后我发起1个工单，3个工作日重新开机，但是数据被清空。停机几天内，我选择了[DigitalOcean](https://www.digitalocean.com/?refcode=3f78995f050c)，最终选择了DigitalOcean作为备用机。以下是我对DigitalOcean月付5美刀机器的评测。网上都是Linode和DigitalOcean对比评测，我么有用过Linode，以我实际使用经验来评测。

##配置

**年付15美刀**的DirectSpace配置：

CPU(1x 3.3Ghz)、内存(512MB/768MB)、硬盘(20GB SSD)、2TB流量

**月付5美刀**的DigitalOcean最低配：

CPU(1x 2.0GHz)、内存(512MB)、硬盘(20GB SSD)、1TB流量

配置方面的DirectSpace稍微好点。

##价格

DirectSpace就不说了，一次性年付（预付款）。DigitalOcean支持信用卡、Paypal支付，虽然DigitalOcean是月付，但实际是按照小时扣费，也就是说，充值最小单位是5美刀，但是每月账单是按照实际使用时间（小时）计算的。另外，DigitalOcean新用户注册是赠送10美刀免费体验2个月。**欢迎使用我的邀请码注册**，获得10美刀体验：[https://www.digitalocean.com/?refcode=3f78995f050c](https://www.digitalocean.com/?refcode=3f78995f050c)，优惠码`ALLSSD10`。

DigitalOcean计费的方式：

1. 创建了虚拟主机（开机、关机）都计费，每小时0.007美刀；
2. 创建一次虚拟主机，使用不超过1小时，扣费0.01美刀；
3. 删除虚拟主机，不扣费；

##备份

DirectSpace没有有备份镜像，但是备份文件不再面板显示，面板也没有提供恢复工具。DirectSpace使用的是SolusVM。

 
DigitalOcean提供快照、自动备份功能。自动备份功能会增加20%的费用，所以建议使用快照功能。创建快照实际上是做一次镜像备份，速度很快，大概2分钟左右，镜像会保存在服务器，并且DigitalOcean的面板支持恢复镜像。你完全可以：

1. 需要使用时，创建虚拟主机；
2. 不想使用了，创建镜像，删除主机，下次使用可以恢复镜像；

##国内访问速度

DirectSpace网速测试：[http://directspace.net/network/](http://directspace.net/network/)

深圳`ping bandwidth.directspace.net`速度平均300ms左右

DigitalOcean各个节点网速测试：[http://speedtest-sfo1.digitalocean.com/](http://speedtest-sfo1.digitalocean.com/)

深圳访问SFO1速度不错，一般稳定在200ms左右。

##VPN
DirectSpace使用的openvz虚拟方案，DigitalOcean是KVM虚拟方案，都支持VPN。DirectSpace貌似不支持VPN加密。

##总结

我个人比较**推荐DigitalOcean**，因为比较看重稳定性和安全。DigitalOcean据说有不错的资金背景、客户口碑以及服务质量。

目前我仍然在使用DirectSpace，并且在DigitalOcean做好镜像备份，如果下次DirectSpace再挂掉，或者账单到期，直接域名切到DigitalOcean。而且第一次注册赠送的10美刀，足够DigitalOcean挂掉两个月了。

最后再次广告，**欢迎使用我的邀请码注册**，获得10美刀体验：[https://www.digitalocean.com/?refcode=3f78995f050c](https://www.digitalocean.com/?refcode=3f78995f050c)，优惠码`ALLSSD10`。

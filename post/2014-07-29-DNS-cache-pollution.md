# 域名解析污染

今天突然意识到，翻墙这么久，为什么没有没碰到过被域名解析污染的问题。上网找了下资料，记录在此。

GFW（Great Fire Wall）的封锁，我理解主要有两个方法：

1. 过滤——包含IP地址、关键字过滤；
2. 域名解析污染；

比如这个污染现场（在本地）：

	ping facebook.com

返回的结果：

	ping facebook.com (59.24.3.173) 56(84) bytes of data.

然后查一下`59.24.3.173`这个IP是在韩国，这个IP地址被收录在[域名服务器缓存污染 via wikipedia](http://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%BC%93%E5%AD%98%E6%B1%A1%E6%9F%93)，其实`ping twitter.com`也是返回这个IP地址。

即使在墙内使用`8.8.8.8`解析域名，仍然会被污染。

## socks代理解析域名

之所以，我一直没碰到域名解析污染的问题，是因为Google Chrome的socks代理，默认把域名解析发送到socks代理服务器解析，这就是使用shadowsocks代理，域名解析不会被污染的原因，当然代理服务器必须在墙外。



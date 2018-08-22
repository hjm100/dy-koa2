# BUG收集

# 关于pm2查看日志问题

1. pm2 flush 日志清理

1. pm2 log   查看日志

1. 总结：查看日志前请先清理日志，避免多条日志混交出现

```js
// package.json
//清理日志-->删除dev进程-->启动服务--> 输出日志

"scripts": {
  "dev": "pm2 flush&&pm2 startOrRestart pm2/dev_pm2.json&&pm2 log"
},

```
# 删除进程

1. pm2 delete //后面跟进程id或名称



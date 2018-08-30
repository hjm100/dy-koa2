# dy-Koa2

## 项目说明

1. Koa2搭建练习与实践

## 技术选型

koa/node.js + es6/es7/es8  

## 项目运行

```bash
# 安装项目依赖
npm install

# 启用项目（只启动前端项目不启动本地数据模拟）

npm start

# 启动项目 + mock（模拟数据）

```

## 启用项目前请访问

1. skillReadme --> 技术文档总计

1. plan        --> 开发计划说明

## 项目结构
```
.
├── config                          # 全局配置文件
|   ├── db.config.js                # 数据库配置
│   └── serve.config.js             # 服务控制
├── db                              # 数据库操作
│   └── utils                   
├── db_script                       # 数据库脚本
├── controller                      # 控制器(业务代码)
|   ├── img.js                      # 图片操作相关接口
│   └── user.js                     # 用户信息相关接口
├── router                          # 路由
│   └── index.js                    # 路由统一入口
├── kluy                            # 底层
│   └── core.js                     # 核心封装  ！！！
├── utils                           # 工具
|   ├── utils                       # 统一封装函数   
│   └── tips.js                     # 错误统一处理
├── plan                            # 开发计划说明
├── skillReadme                     # 技术文档说明
|   ├── BUG.md                      # Bug收集  
│   └── KOA2.md                     # 技术难点总结
├── timed_task                      # 定时任务
├── task_script                     # 任务脚本
├── serve.js                        # 服务入口
├── .gitignore
├── README.md                       # 项目说明文件
├── package-lock.json
└── package.json

```
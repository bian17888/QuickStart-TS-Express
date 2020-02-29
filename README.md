# 项目说明

## Quick Start

### 安装运行 MongoDB (Mac)

    brew install mongodb
    导入默认数据库 - seed.js
    启动mongo

### 配置vscode ts 任务
    
    command + shift + b 

### 项目初始化 & 启动
    npm i
    npm run start



## Todo
- MongoDB - seed.js (导入初始仓库)
- Express 项目的 TS 写法
- local.strategy.ts  中的 async 写法
- req.user.admin - 更精细的权限控制 
- logout 逻辑 - http://www.passportjs.org/docs/logout/
- third api : goodreads (https://www.goodreads.com/api/keys)
    - key: GTveg1vjb4UhftWUePfA2g
    - secret: FgolC9zU2lWJfmK6JukScClKd6ugkJpeGBc6tZZE0
- the third api service is invalid because of the firewall
    - views/book/detail.pub
    - controllers/book.ts
    - services/goodreads.ts
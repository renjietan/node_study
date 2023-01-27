### 第一步
* 新建工程
```
yarn create egg --type=simple
```
* 初始化
```
yarn install
```
* 启动工程
```
yarn dev
```
### 目录介绍
|  目录         | 子目录         | 说明 |
|  ----         | ----              | ---- |
| app           | -                 | - |
|               | controller        | 控制器目录 |
|               | public            | - |
| config        | -                 | - |
|               | config.default.js | 系统配置文件 |
|               | plugin.js         | 第三方插件配置文件 |
| logs          | -                 | 项目启动后的日志文件夹 |
| node_modules  | -                 | 项目运行所依赖的包 |
| run           | -                 | 项目启动后，生成的临时文件，类似于dist |
| test          | -                 | 单元测试 |
| typings       | -                 | typescript配置目录 |
| .eslintignore | -                 | ESlint配置文件 |
| .eslintrc     | -                 | eslint配置文件、语法规则的详细配置文件 |
| .gitignore    | -                 | git配置文件 |
| package.json  | -                 | 项目管理文件（包含包管理文件和命令管理文件）|

### package.json
* dev : 开发环境中使用，不用重启服务器，只要刷新。修改内容就会更改。
* start：生产环境中使用，也就是开发完成，正式运营之后。以服务的方式运行。修改后要停止和重启后才会发生改变。

### 关闭跨域(config.default.js)
···
  config.security = {
    csrf: {
      enable: false,
    }
  }
···

### mysql相关
- plugin.js
```
exports.mysql = {
  enable:true,
  package:'egg-mysql'
}
```
- config.default.js
```
config.mysql = {
    app:true,     //是否挂载到app下面
    agent:false,  //是否挂载到代理下面
    client:{
      host:'192.168.1.140',      // 数据库地址
      prot:'3306',           // 端口
      user:'root',           // 用户名
      password:'123456',    // 密码
      database:'test'    // 连接的数据库名称
    }
  }
```


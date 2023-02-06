- 命令
  * 全局安装 npm i -g @nestjs/cli
  * 新建工程（JS） nest new project-name
  * 新建工程（TS） nest new project-name --strict
  * 启动工程 
    * npm run start
    * npm run start:dev
    * npm run start:debug
  * 其他命令可通过 nest -h查询
- swagger配置
  * 安装
    $ npm install --save @nestjs/swagger swagger-ui-express
    //如果使用fastify，则必须安装fastify-swagger而不是swagger-ui-express：
    $ npm install --save @nestjs/swagger fastify-swagger
  * 配置
    const options = new DocumentBuilder()
      .setTitle(APP_NAME)
      .setDescription(`The ${APP_NAME} API description`)
      .setVersion(APP_VERSION)
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
- 注解
  * @Body
    * x-www-form-urlencoded
    * raw
* 

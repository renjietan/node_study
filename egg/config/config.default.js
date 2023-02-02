/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1674180141185_9070';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf: {
      enable: false,
    }
  }
  config.mysql = {
    app: true, //是否挂载到app下面
    agent: false, //是否挂载到代理下面
    client: {
      host: '192.168.1.140', // 数据库地址
      prot: '3306', // 端口
      user: 'root', // 用户名
      password: '123456', // 密码
      database: 'test' // 连接的数据库名称
    }
  }

  config.sequelize = {
    dialect: 'mysql',
    host: '192.168.1.140',
    port: 3306,
    database: 'nodejs测试',
    username: 'root',
    password: '123456',
    // 配置数据库时间为东八区北京时间 timezone: '+08:00', 
    define: { // model的全局配置 
      timestamps: true, // 添加create,update,delete时间戳 
      paranoid: true, // 添加软删除 
      freezeTableName: true, // 防止修改表名为复数 
      underscored: false, // 防止驼峰式字段被默认转为下划线
    },
    // 打印日志 
    logging: true,
    // 时间格式化 默认情况下查询的日期是这种样子2022-01-02T09:14:03.102Z，我们需要对它自动格式化才行。
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    }
  }
}
return {
  ...config,
  ...userConfig,
};
};
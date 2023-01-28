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
  return {
    ...config,
    ...userConfig,
  };
};
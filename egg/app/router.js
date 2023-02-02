'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get("/addGirls", controller.girl.addGirls)
  router.get("/delGirls", controller.girl.delGirls)
  router.get("/updateGirls", controller.girl.updateGirls)
  router.get("/getGirls", controller.girl.getGirls)
};
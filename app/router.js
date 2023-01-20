'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/index', controller.home.test);
  router.get('/test/:name', controller.test.get_test);
  router.post('/test/:id', controller.test.post_test);
};

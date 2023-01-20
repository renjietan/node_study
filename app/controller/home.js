'use strict';

const {
  Controller
} = require('egg');

class HomeController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    ctx.body = 'hello world';
  }
  async test() {
    const {
      ctx
    } = this;
    ctx.body = "tanrenjie"
  }
}

module.exports = HomeController;
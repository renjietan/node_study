'use strict';
const {
    Controller
} = require('egg');

class TestController extends Controller {
    async get_test() {
        const {
            ctx
        } = this
        ctx.body = ctx.params.name + ctx.query.name
    }
    async post_test() {
        const {
            ctx
        } = this
        ctx.body = await ctx.service.test.getUserInfo(2)
    }
}

module.exports = TestController;
"use strict";

const Con = require("egg").Controller;

class UserCon extends Con {
    async addUser() {
        const { ctx } = this;
        ctx.body = "添加女孩";
    }
}

module.exports = UserCon
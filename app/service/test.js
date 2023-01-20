"use strict"

const { Service } = require("egg")

class TestService extends Service {
    async getUserInfo(id) {
        return {
            id,
            name: "小孩",
            age: 25
        }
    }
}

module.exports = TestService
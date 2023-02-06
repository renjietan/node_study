import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private userList = []
    getList() {
        return this.userList
    }
    add(params: Object) {
        return this.userList.push(params)
    }
    del(params) {
        return this.userList.filter(item => item == params)
    }
    update(params: Object) {
        return this.userList[params["index"]] = params["num"]
    }
}

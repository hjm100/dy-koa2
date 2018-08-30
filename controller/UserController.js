
const Tips = require('../utils/tips');
const db = require('../db/index');
//登录
module.exports = {
    // async顾名思义是“异步”的意思，async用于声明一个函数是异步的。而await从字面意思上是“等待”的意思，就是用于等待异步完成。
    async getUser(ctx, service) {
        // 调用 Service 进行业务处理
        const user = await service.userService.storeInfo();//开心的使用service
        if (user && user.length > 0) {
            ctx.body = {...Tips[0], data: user};
        } else {
            ctx.body = Tips[1005];
        }
    }
}

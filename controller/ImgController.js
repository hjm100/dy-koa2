const Tips = require('../utils/tips');

module.exports = {
    async getImg(ctx) {
        ctx.body = '我是首页'

    },
    async getImgInfo(ctx) {
        ctx.body = Tips[1005];
    }
};
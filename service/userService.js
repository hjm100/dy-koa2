const db = require('../db/index');

module.exports = {
    async storeInfo() {
        //查询用户信息
        let sql = "SELECT * FROM dy_user";
        const user = await db.query(sql);
        return user;
    },
};
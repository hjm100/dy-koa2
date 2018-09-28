const db = require('../db/index');
module.exports = {
    async storeInfo() {
        //查询用户信息
        let sql = "SELECT * FROM dy_user";
        const user = await db.query(sql);
        return user;
    },
    /**
     * @param {Object} tab   //表结构 {与data相对应}
     * @param {Array} data   //插入的数据列表
     */

    async loggingData(tabname,tab,data){
        //数据存储 -> 根据字段创建表 ->写入数据
        let tabKeys = Object.keys(tab);
        let cre = [],val=[];
        await tabKeys.forEach(t => {
            cre.push(`${t} ${tab[t]}`);
            val.push('?')
        });
        let creSql = `CREATE TABLE ${tabname}(${cre.join(",")})`;
        let selSql = `SELECT * FROM ${tabname}`;
        let delSql = `DELETE FROM ${tabname}`;
        let addSql = `INSERT INTO ${tabname}(${tabKeys.join(",")}) VALUES(${val.join(",")})`;
        let sqlData = await db.query(selSql)||[];
        await db.query(creSql);
        if(sqlData.length > 0) await db.query(delSql);
        await data.forEach((d,index) => {
            let item = [index+1];
            tabKeys.forEach((t,i) => {
                if(i>0) item.push(d[t])
            });
            db.query(addSql,item);
        });
    }
};





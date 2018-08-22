const router = require('koa-router')();
const db = require('../db/index');
const Tips = require('../utils/tips');
const md5 = require('md5');
//登录
router.get('/', async (ctx, next) => {
    //创建User表(不能多次创建)
    // db.query("CREATE TABLE dy_user(id int,name varchar(255),password varchar(255))", function(err,result){
    //     if(err)throw err
    //     else console.log("创建表成功")
    // })
    //增
    // let  sql = 'INSERT INTO dy_user(name,password) VALUES(?,?)';
    // let  value = ['鸿基',md5('123456')];
    // await db.query(sql, value).then(res => {
    //     ctx.body = {
    //         ...Tips[0]
    //     }
    // }).catch(e => {
    //     ctx.body = Tips[1002];
    // });
    //查
    // let sql = 'SELECT * FROM dy_user';
    let sql = "SELECT * FROM dy_user WHERE name='王鸿三'"
    await db.query(sql).then(res => {
        if (res && res.length > 0) {
            ctx.body = {...Tips[0], data: res};
        } else {
            ctx.body = Tips[1005];
        }
    }).catch(e => {
        ctx.body = Tips[1005];
    })
    //改
    // let  sql = 'UPDATE dy_user SET name = ?,password = ? WHERE Id = ?';
    // let  value = ['哈哈哈', '123',6]; // 更新id为6的数据
    // await db.query(sql,value).then(res => {
    //     ctx.body = {
    //         ...Tips[0]
    //     }
    // }).catch(e => {
    //     ctx.body = Tips[1005];
    // })
    //删 (同时删除id是10,11,12)的数据
    // DELETE FROM websites where id=6 删除id为6的数据
    // let sql = 'DELETE FROM dy_user where id in(10,11,12)'; 
    // await db.query(sql).then(res => {
    //     ctx.body = {
    //         ...Tips[0]
    //     }
    // }).catch(e => {
    //     ctx.body = Tips[1005];
    // })
});

module.exports = router;
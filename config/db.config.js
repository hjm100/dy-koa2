 // 数据库配置
const config = {
    host     : 'localhost', // 主机地址 （默认：localhost）
    user     : 'root',      // 用户名
    password : '',          // 密码
    database : 'dy',        // 数据库名
    port:3306,              // 端口号 （默认：3306）
    multipleStatements: true//允许多条sql同时执行
};

module.exports = config
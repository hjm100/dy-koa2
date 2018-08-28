let user = require('../controller/user');
let img = require('../controller/img');

let ROUTER = (app) => {
    app.use(user.routes()).use(user.allowedMethods());
    app.use(img.routes()).use(img.allowedMethods());
}

// {path: "/",method:'post,controller:aaa'},
// 地址 方法 控制器

module.exports = ROUTER;
let user = require('../controller/user');
let img = require('../controller/img');

let ROUTER = (app) => {
    app.use(user.routes()).use(user.allowedMethods());
    app.use(img.routes()).use(img.allowedMethods());
}

module.exports = ROUTER;
module.exports = (app) => {
    const User = app.controller.UserController;
    return [
        // '请求地址'：{method:"请求方式",action:请求方法}
        {
            path: "/user",
            method: "get",
            action: User.getUser
        }
    ]
}
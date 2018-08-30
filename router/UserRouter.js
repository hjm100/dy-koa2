module.exports = (app) => {
    return {
        'get /user': app.controller.UserController.getUser,
    }
}
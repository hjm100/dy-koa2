module.exports = (app) => {
    return {
        'get /bb': app.controller.ImgController.getImg,
        'get /cc': app.controller.ImgController.getImgInfo
    }
}
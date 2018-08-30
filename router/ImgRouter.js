module.exports = (app) => {
    return {
        'post /bb': app.controller.ImgController.getImg,
        'get /': app.controller.ImgController.getImgInfo
    }
}
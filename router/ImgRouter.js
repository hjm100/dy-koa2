module.exports = (app) => {
    const Img = app.controller.ImgController;
    return [{
            path: "/",
            method: "get",
            action: Img.getImgInfo
        },
        {
            path: "/bb",
            method: "post",
            action: Img.getImg
        }
    ]
}
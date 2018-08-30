const Tips = require('../utils/tips');

module.exports = {
    async getImg(ctx) {
        ctx.body = Tips[1005];
    },
    async getImgInfo(ctx) {
        let html = `
        <h2>This is demo2</h2>
        <form method="POST" action="/bb">
            <p>username:</p>
            <input name="username">
            <p>age:</p>
            <input name="age">
            <p>website</p>
            <input name="website">
            <button type="submit">submit</button>                   
        </form>
        `
        ctx.body = html
    }
};
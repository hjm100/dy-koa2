const Koa = require('koa');
const fs = require('fs');
const koaRoute = require('koa-router');
const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body');
const errorHandler = require('koa-error');
const etag = require('koa-etag');
const Tips = require('../utils/tips');
const db = require('../db/index');
//------------------------------------------------------//
const app=new Koa(); //上为npm包 下为js文件
// 使用表单解析中间件
app.use(bodyParser());
app.use(errorHandler());
app.use(etag());
app.use(koaBody());
//----------------------------------------------------//

//底层类
class KluyLoader {
    removeString(source) {
        const string = 'kluy';
        const index = source.indexOf(string);
        return source.substring(0, index);
    }

    loader(path) {
        const dir = fs.readdirSync(path)//同步方法无所谓的，因为是在服务器跑起来之前就完成映射，不会有任何性能影响
        return dir.map((filename) => {
            const module = require(path + '/' + filename);
            return { name: filename.split('.')[0], module };
        })
    }
    //加载路由
    loadRouter() {
        const url = this.removeString(__dirname) + '/router';
        return this.loader(url);
    }
    //加载控制器
    loadController() {
        const url = this.removeString(__dirname) + '/controller';
        return this.loader(url);
    }
    //加载服务
    loadService() {
        const url = this.removeString(__dirname) + '/service';
        return this.loader(url);
    }

}

// 定义了一个Kluy类，该类通过extends关键字，继承了koa类的所有属性和方法
class Kluy extends Koa {
    constructor(props) {
        super(props);
        this.router = new koaRoute();
        this.loader = new KluyLoader();
        const controllers = this.loader.loadController();
        this.controller = {};
        controllers.forEach((crl) => {
            this.controller[crl.name] = crl.module;
        })
    }
    //设置路由(封装服务)
    setRouters() {
        const _setRouters = (app) => {
            const router = this.loader.loadRouter();
            this.rou ={}
            router.forEach((crl) => {
                this.rou = Object.assign(crl.module(app),this.rou)
            })
            const serve = {};
            app.loader.loadService().forEach((service) => {
                serve[service.name] = service.module;
            })
            Object.keys(this.rou).forEach((key) => {
                const [method, path] = key.split(' ');
                app.router[method](path, async (ctx) => {
                    const handler = this.rou[key];
                    await handler(ctx, serve);
                })
            })
            return app.router.routes()
        }
        this.use(_setRouters(this)).use(this.router.allowedMethods());
    }
}

module.exports = Kluy;
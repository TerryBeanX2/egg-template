const Controller = require('egg').Controller

class HomeController extends Controller {
    async index () {
        const { ctx } = this
        await ctx.render('index.html')
    }
    async about_us () {
        const { ctx } = this
        await ctx.render('about-us.html')
    }
    async news_list () {
        const { ctx } = this
        await ctx.render('news-list.html')
    }
}

module.exports = HomeController

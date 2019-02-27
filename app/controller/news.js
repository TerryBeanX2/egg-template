const Controller = require('egg').Controller

class NewsController extends Controller {
    async list () {
        const ctx = this.ctx
        const page = ctx.query.page || 1
        const data = await ctx.service.news.list(page)
        console.log(data.length)
        await ctx.render('news/list.tpl', { data })
    }
}

module.exports = NewsController

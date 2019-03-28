const Controller = require('egg').Controller

class HomeController extends Controller {
    async index () {
        const { ctx } = this
        await ctx.render('index.html')
    }

    async success () {
        const { ctx } = this
        await ctx.render('index.html', { status: 0 })
    }

    async about_us () {
        const { ctx } = this
        await ctx.render('about-us.html')
    }

    async news_list () {
        const { ctx } = this
        await ctx.render('news-list.html')
    }

    async yijie () {
        const { ctx } = this
        await ctx.render('yijie.html')
    }

    async yishiping () {
        const { ctx } = this
        await ctx.render('yishiping.html')
    }

    async zq_doctor () {
        const { ctx } = this
        await ctx.render('zq-doctor.html')
    }

    async news_detail () {
        const { ctx } = this
        await ctx.render('news-detail.html')
    }

    async news_detail1 () {
        const { ctx } = this
        await ctx.render('news-detail1.html')
    }

    async news_detail2 () {
        const { ctx } = this
        await ctx.render('news-detail2.html')
    }
}

module.exports = HomeController

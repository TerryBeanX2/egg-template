const Controller = require('egg').Controller

function toInt (str) {
    if (typeof str === 'number') return str
    if (!str) return str
    return parseInt(str, 10) || 0
}

class CustomersController extends Controller {
    async index () {
        const ctx = this.ctx
        const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) }
        ctx.body = await ctx.model.Customers.findAll(query)
    }

    async show () {
        const ctx = this.ctx
        ctx.body = await ctx.model.Customers.findById(toInt(ctx.params.id))
    }

    async create () {
        const ctx = this.ctx
        const { name, phone, company_name, budget, field, project_type, ad_aim, like_platform, tip } = ctx.request.body
        const Customers = await ctx.model.Customers.create({ name, phone, company_name, budget, field, project_type, ad_aim, like_platform, tip })
        // ctx.status = 201
        // ctx.body = Customers
        ctx.app.getLogger('customerLogger').info('【新客户】:' + JSON.stringify(Customers))
        ctx.redirect('/success')
    }

    async update () {
        const ctx = this.ctx
        const id = toInt(ctx.params.id)
        const Customers = await ctx.model.Customers.findById(id)
        if (!Customers) {
            ctx.status = 404
            return
        }

        const { name, phone, company_name, budget, field, project_type, ad_aim, like_platform, tip } = ctx.request.body
        await Customers.update({ name, phone, company_name, budget, field, project_type, ad_aim, like_platform, tip })
        ctx.body = Customers
    }

    async destroy () {
        const ctx = this.ctx
        const id = toInt(ctx.params.id)
        const Customers = await ctx.model.Customers.findById(id)
        if (!Customers) {
            ctx.status = 404
            return
        }

        await Customers.destroy()
        ctx.status = 200
    }
}

module.exports = CustomersController

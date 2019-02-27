const Service = require('egg').Service

class NewsService extends Service {
    async list (page = 1) {
        const { data } = await this.ctx.app.http.get('https://cnodejs.org/api/v1/topics', {
            page: 1,
            limit: 10
        })
        return data
    }
}

module.exports = NewsService

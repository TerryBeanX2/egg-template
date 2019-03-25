const Service = require('egg').Service

class NewsService extends Service {
    async list (page = 1) {
        const { data } = await this.ctx.curl('https://cnodejs.org/api/v1/topics', {
            // 必须指定 method
            method: 'GET',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            data: {
                page: 1,
                limit: 10
            },
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json'
        })
        return data.data
    }
}

module.exports = NewsService

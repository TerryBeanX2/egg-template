// const dayjs = require('dayjs')
const moment = require('moment')
module.exports = {
    relativeTime: time => moment(time).format('L'),
    toString: t => JSON.stringify(t)
}

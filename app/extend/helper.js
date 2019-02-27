const dayjs = require('dayjs')
module.exports = {
    relativeTime: time => dayjs().format(time)
}

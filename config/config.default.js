/* eslint valid-jsdoc: "off" */
const path = require('path')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = {
        view: {
            defaultViewEngine: 'nunjucks',
            mapping: {
                '.tpl': 'nunjucks'
            }
        },
        http: {
            headers: {
                common: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            },
            timeout: 10000
        },
        sequelize: require('../database/config.json').development,
        security: {
            csrf: {
                enable: false
            }
        },
        customLogger: {
            userLogger: {
                file: path.join(appInfo.root, 'logs/user-record.log')
            }
        }
    }

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1550820990680_9474'

    // add your middleware config here
    config.middleware = [
        'robot'
    ]

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    }

    return {
        ...config,
        ...userConfig
    }
}

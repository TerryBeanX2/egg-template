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
                '.tpl': 'nunjucks',
                '.html': 'nunjucks'
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
        },
        assets: {
            enable: true,
            package: 'egg-view-assets'
        },
        static: {
            // 静态化访问前缀,如：`http://127.0.0.1:7001/static/images/logo.png`
            prefix: '/assets',
            // dir: path.join(appInfo.baseDir, 'app/public'), // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
            dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
            preload: false,
            maxAge: 31536000, // in prod env, 0 in other envs
            buffer: true // in prod env, false in other envs
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

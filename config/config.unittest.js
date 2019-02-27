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
        sequelize: require('../database/config.json').test,
        logger:{
            dir: path.join(appInfo.root , 'test-log')
        },
        customLogger: {
            userLogger: {
                file: path.join(appInfo.root, 'test-log/user-record.log')
            }
        }
    }

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    }

    return {
        ...config,
        ...userConfig
    }
}

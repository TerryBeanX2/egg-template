/* eslint-disable eggache/no-unexpected-plugin-keys */
/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    // static: {
    //   enable: true,
    // }
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks'
    },
    http: {
        enable: true,
        package: 'egg-axios'
    },
    sequelize: {
        enable: true,
        package: 'egg-sequelize'
    },
    session: {
        key: 'EGG_SESS',
        maxAge: 86400000,
        autoCommit: true,
        overwrite: true,
        httpOnly: true,
        signed: true,
        rolling: false,
        renew: false
    }
}

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app
    router.get('/', controller.home.index)
    router.get('/news', controller.news.list)
    router.post('/users/add', controller.users.create)
    router.resources('users', '/users', controller.users)
}

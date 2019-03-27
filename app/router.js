/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app
    router.get('/', controller.home.index)
    router.get('/about-us', controller.home.about_us)
    router.get('/news-list', controller.home.news_list)
    router.post('/users/add', controller.users.create)
    router.resources('users', '/users', controller.users)
}

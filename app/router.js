/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app
    router.get('/', controller.home.index)
    router.get('/success', controller.home.success)
    router.get('/about-us', controller.home.about_us)
    router.get('/news-list', controller.home.news_list)
    router.get('/yijie', controller.home.yijie)
    router.get('/yishiping', controller.home.yishiping)
    router.get('/zq-doctor', controller.home.zq_doctor)
    router.get('/news-detail', controller.home.news_detail)
    router.get('/news-detail1', controller.home.news_detail1)
    router.get('/news-detail2', controller.home.news_detail2)
    router.post('/users/add', controller.users.create)
    router.post('/customers/add', controller.customers.create)
    router.resources('users', '/users', controller.users)
}

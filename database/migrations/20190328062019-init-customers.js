module.exports = {
    // 在执行数据库升级时调用的函数，创建 customer 表
    up: async (queryInterface, Sequelize) => {
        const { INTEGER, DATE, STRING } = Sequelize;
        await queryInterface.createTable('customers', {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(30),
            phone: STRING(30),
            company_name: STRING(50),
            budget: STRING(30),
            field: STRING(30),
            project_type: STRING(50),
            ad_aim: STRING(50),
            like_platform: STRING(50),
            tip: STRING(200),
            created_at: DATE,
            updated_at: DATE
        })
    },
    // 在执行数据库降级时调用的函数，删除 customer 表
    down: async queryInterface => {
        await queryInterface.dropTable('customers');
    }
}

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize

    const Customers = app.model.define('customers', {
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

    return Customers
}

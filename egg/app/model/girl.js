'use strict'; /** * 家长表 */
module.exports = app => {
    const {
        STRING,
        INTEGER,
        UUID,
        NOW,
        DATE,
        UUIDV4
    } = app.Sequelize;
    const Parents = app.model.define('Parents', {
        id: {
            type: UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: UUIDV4,
            comment: '家长id'
        },
        name: {
            type: STRING(36),
            allowNull: false,
            comment: '家长姓名'
        },
        age: {
            type: INTEGER,
            allowNull: false,
            comment: '家长年龄'
        },
        createDate: {
            type: DATE,
            defaultValue: NOW,
            field: 'create_date',
            comment: '创建时间'
        },
        updateDate: {
            type: DATE,
            defaultValue: NOW,
            field: 'update_date',
            comment: '更新时间'
        }
    }, {
        // 去除createAt，updateAt 
        timestamps: false,
        // 实例对应的表名 
        tableName: 'parents'
    });
    return Parents;
};
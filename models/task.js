// *** Burger Model
// =============================================================

module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        // *** delete/change these to Tasks
        task_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estimated_time: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });
    return Task;
};
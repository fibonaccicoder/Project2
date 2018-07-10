module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
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
        // estimated_time: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // }
        frequency: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Every task must have one user.
    Task.associate = function (models) {
        Task.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Task;
};
module.exports = function (sequelize, DataTypes) {
    var Book = sequelize.define("Book", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
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

    // Every task must have one user.
    Book.associate = function (models) {
        Book.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Book;
};
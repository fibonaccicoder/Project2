module.exports = function (sequelize, DataTypes) {
    var Journal = sequelize.define("Journal", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    Journal.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Journal.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Journal;
};
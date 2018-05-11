"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
    })
    .forEach(function (file) {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;



// #
// module Authentication
//   extend ActiveSupport::Concern

//   #
//   module ClassMethods
//     def authenticate(email, password)
//       user = find_by(email: email)
//       return unless user
//       user.send :new_token
//       user.authenticate password
//     end
//   end

//   included do
//     has_secure_password
//     before_create :set_token
//     after_find :fix_up_token
//     validates :email, uniqueness: true
//   end

//   def logout
//     new_token
//   end

//   # FIXME: Do I need to validate that token doesn't exist? (improbable)
//   def set_token
//     self.token = SecureRandom.hex(16)
//   end

//   # unconditionally create and set a new token
//   def new_token
//     update_columns(token: set_token, updated_at: Time.current)
//   end

//   # expire old token
//   def fix_up_token
//     # FIXME: token age should be configurable
//     new_token if updated_at < 7.days.ago
//   end

//   private :set_token, :new_token, :fix_up_token
// end
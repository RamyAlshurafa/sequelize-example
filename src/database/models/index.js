const models = require('./../config/db');
const { sequelize, Sequelize } = models
models.Users = require('./users')(sequelize, Sequelize);
models.Posts = require('./posts')(sequelize, Sequelize);
models.Posts.belongsTo(models.Users, {
  onDelete: 'CASCADE',
  foreignKey: 'user_id',
  targetKey: 'id',
});

module.exports = models ;

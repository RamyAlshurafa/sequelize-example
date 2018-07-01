const models = require('./../models/index');
console.log(models.Posts);
models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
  models.sequelize.sync({ force: true }).then(async () => {
   await models.Users.create({
    username: 'ramy' ,
  });
  await models.Posts.create({
    text: 'hello world' ,
    user_id:1
  });
})

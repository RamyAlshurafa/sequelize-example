const app = require('./app');
const port = app.get('port')
const models = require('./database/models');
models.sequelize.sync().then(() => {
  app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
  })


})

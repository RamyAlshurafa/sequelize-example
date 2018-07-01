module.exports = (sequelize, DataTypes)=>{
  const Posts = sequelize.define('posts',{
    text : {
      type : DataTypes.STRING
    }
  })
  return Posts
};

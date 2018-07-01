module.exports = (sequelize,DataTypes)=>{
  const Users = sequelize.define('users',{
    username:{
      type: DataTypes.STRING
    }
  })
  return Users

};

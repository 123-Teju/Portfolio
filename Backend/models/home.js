module.exports=(sequelize,DataTypes)=>{
    const home=sequelize.define('home',{
        image:{
            type:DataTypes.STRING,
            allowNull:false
        }
      
    })
    return home
}
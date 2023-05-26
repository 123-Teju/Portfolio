module.exports=(sequelize,DataTypes)=>{
    const about=sequelize.define('about',{
        image:{
            type:DataTypes.STRING,
            allowNull:false
        }
      
    })
    return about
}
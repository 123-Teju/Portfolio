module.exports=(sequelize,DataTypes)=>{
    const services=sequelize.define('services',{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
       framework:{
            type:DataTypes.STRING,
            allowNull:false
        },
        link:{
            type:DataTypes.STRING,
            allowNull:false
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return services
}
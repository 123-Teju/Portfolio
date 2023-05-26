const {Sequelize,DataTypes}=require("sequelize")

const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./db.db',
    logging:false
})

try {
    sequelize.authenticate()
    console.log("DataBase Connected SuccessFully")
} catch (error) {
    console.log(error)
}

const db={}

db.sequelize=sequelize
db.Sequelize=Sequelize
db.admin=require('./admin')(sequelize,DataTypes)
db.about=require('./about')(sequelize,DataTypes)
db.home=require('./home')(sequelize,DataTypes)
db.services=require('./services')(sequelize,DataTypes)

db.sequelize.sync({})

module.exports=db

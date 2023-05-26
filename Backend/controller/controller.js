//Importing Libraries
const bcrypt=require("bcrypt")
//Importing Tables From DataBase
const db = require("../models/connections");
const Admin=db.admin
const About=db.about
const Home=db.home
const Services=db.services



//All Logics
class Controller{
    
    //Admin Login
    static authAdmin=async (req, res) => {
        try {
          const { email, password } = req.body;      
          const admin = await Admin.findOne({ where: { email } });
          if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }      
          const isPasswordValid = await bcrypt.compare(password, admin.password);
          if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid  password' });
          }      
          res.status(200).send(admin);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal server error');
        }
    }

    //Create Admin
    static createAdmin=async(req,res)=>{
       const hash=await bcrypt.hash("123454321",10)
       const data=await Admin.create({
        email:"admin@admin.com",
        password:hash
       })
       res.send("Admin Created SuccessFully")
    }

    //Update Password
    static updatePass=async(req,res)=>{
      const {pass}=req.body
      const hash=await bcrypt.hash(pass,10)
      if(pass){
        const admin=await Admin.update({password:hash},{where:{email:'admin@admin.com'}})
        res.status(200).send("Password Updated")         
      }else{
        res.status(401).send("Require All Fields")
      }
    }
    //ADdig About Pic
    static addAbout=async(req,res)=>{
      const {image}=req.body
      if(image){
        const data=await About.update({image:image},{where:{id:1}})
        res.status(200).send("Added SuccessFully")
      }else{
        res.status(401).send("Image is Not Supported")
      }
    }
    // Addding pic to Home
    static addHome=async(req,res)=>{

      const {image}=req.body
      if(image){
        const data=await  Home.update({image:image},{where:{id:1}})
        res.status(200).send("Added SuccessFully")
      }else{
        res.status(401).send("Image is Not Supported")
      }
    }
    // Adding Services
    static addServices=async(req,res)=>{
      console.log("I am Here")
      const {title,framework,link,image}=req.body
      if(title,framework,link,image){
       const data=await Services.create({
        title:title,
        framework:framework,
        link:link,
        image:image
       })
       res.status(200).send("Added SuccessFully")

      }else{
        res.status(402).send("Required All Fields")
      }
    }
    // fetching Image
    static fetchImg=async(req,res)=>{
      const data=await Home.findAll({})
      res.status(200).send(data)
    }
    // fetching Image ABout
    static fetchImg2=async(req,res)=>{
      const data=await About.findAll({})
      res.status(200).send(data)
    }
    //Fetch Services
    static fetchServices=async(req,res)=>{
      const data=await Services.findAll({})
      res.status(200).send(data)
    }
    //Deleted Services
    static deleteServices=async(req,res)=>{
      const {id}=req.body
      const delet=await Services.destroy({where:{id:id}})
      res.status(200).send("Deleted")
    }
}

module.exports=Controller
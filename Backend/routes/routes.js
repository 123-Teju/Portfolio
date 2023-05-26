const express=require("express")
const Controller = require("../controller/controller")

const router=express.Router()

//Should Remove 
router.get('/createAdmin',Controller.createAdmin)
//Admin API's
router.post("/admin",Controller.authAdmin)

router.post('/updatePass',Controller.updatePass)
router.post('/addAbout',Controller.addAbout)
router.post('/addHome',Controller.addHome)
router.post('/addServices',Controller.addServices)
router.post('/deleteServices',Controller.deleteServices)

//Get Request
router.get('/fetchImg',Controller.fetchImg)
router.get('/fetchImg2',Controller.fetchImg2)
router.get('/fetchServices',Controller.fetchServices)

module.exports=router

const {Router}=require('express');
const jwt = require('jsonwebtoken');
const {adminModel}=require('../db');
const {JWT_admin_PASSWORD}=require('../config');
// adminRouter.use(adminMiddleware)


const adminRouter=Router();

adminRouter.post('/signup',async function(req,res){
    console.log("inside post singn up admin route")
    const { email, firstName, lastName, password }= req.body;
    try{
        const admin=await adminModel.findOne({email:email})
        if(admin){
            return res.json({
                message: "admin aleady exists, please sing In!"
            })
        } else {
            await adminModel.create({
                email,
                password,
                firstName,
                lastName
            })
            res.json({
                message:"admin signup successful"
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "an error occured during signup"
        })
    }
})

adminRouter.post('/signin', async function(req,res){
    const { email, password }= req.body;
    // ideally passwrod is hased hence the admin provide passwrod 
    // could not be compared byh the db passwrd 
    const admin= await adminModel.findOne({
        email: email,
        password:password
    });
    if(admin){
        const token = jwt.sign({
            id : admin._id
        }, JWT_admin_PASSWORD);
        //do cookie logic if using cookies
        res.json({
            token: token
        })
    } else {
        const sign = await adminModel.findOne({
            email: email
        })
        if(!sign){
            res.json({
                message: "Please sign up modafaka"
            })
        }
        
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
})
adminRouter.put('/course', function (req,res){

    res.json({
        message:"cerate a course"
    })
})

adminRouter.get('/courses',function(req,res){
    res.json({
        message:"get all the admin courses"
    })
})


module.exports={
    adminRouter
}
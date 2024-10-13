
    const {Router}=require('express');
    const jwt = require('jsonwebtoken');
    const {adminModel}=require('../db');

    // adminRouter.use(adminMiddleware)

    const ADMIN_JWT_PASSWORD=process.env.ADMIN_JWT_PASSWORD;
    const adminRouter=Router();

    adminRouter.post('/signup',async function(req,res){
        console.log("inside post singn up admin route")
        // TODO: add encryptiopn to the admin password/
        const { email, firstName, lastName, password }= req.body;
        try{
            const admin=await adminModel.findOne({email:email})
            if(admin){
                return res.json({
                    message: "User aleady exists, please sing In!"
                })
            }
            await adminModel.create({
                email,
                password,
                firstName,
                lastName
            })
            res.json({
                message:"admin signup successful"
            })
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "an error occured during signup"
            })
        }
    })

    adminRouter.post('/signin',async function(req,res){
        const {email, password}=req.body;
        const admin=await adminModel.findOne({
            email: email,
            passsword: password
        })
        if(admin){
            const token = jwt.sign({
                id: admin._id
            }, ADMIN_JWT_PASSWORD);
            res.json({
                token: token    
            })
        } else {
            res.status(403).json({
                message: "Incorerct Credentials"
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
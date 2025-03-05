
const {Router}=require('express');
const {userModel, courseModel, purchaseModel}=require('../db');
const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const {JWT_USER_PASSWORD}=require('../config');
const { userMiddleware } = require('../middlewares/user');


const userRouter=Router();


userRouter.post('/signup', async function (req, res){
    try{    
        const { email, firstName, lastName, password } = req.body; // destructuring the req
        const hashedPassword = await bcrypt.hash(password,10);
        // TODO: HAsh the password for security ## 
        //ideal case is that the password is hashed and saved in the db
        const user=await userModel.findOne({ email: email }) // if it was find then it would return an empty array
        if(user){         
            return res.json({
                message: "User already exists, Please sign in!"
            })
        } else {
            await userModel.create({
                email,
                firstName,
                lastName,
                hashedPassword
            })
            console.log("dtata poushed to db")
        }
        res.json({
            message: "sign up done"
        })
    } catch(err){
        res.status(500).json({
            message: "error occured during sign up"
        })
    }
})

userRouter.post('/signin', async function(req,res){
    try{
        const { email, password }= req.body;
        const user= await userModel.findOne({
            email: email
        });
        if(!user){
            return res.status(404).json({message: "user not found"});
        }
        const isMatch=await bcrypt.compare(password,user.password);

        const token = jwt.sign({
            id : user._id,
        },JWT_USER_PASSWORD);

        res.status(200).json({message:"Login successful"});
    } catch(error) {
        res.status(500).json({mesage:"Something went wrong"});
    }
    
})

userRouter.get('/purchases', userMiddleware, async function(req,res){
    const userId=req.userId;
    const purchases = await purchaseModel.find({
        userId: userId
    })

    //alsop fetch the couyse data as well
    const courseData=await courseModel.find({
        _id: { $in: purchases.map(x => x.courseId)}
    })
    
    res.json({
        message: "what are the courses purched by user",
        purchases
    })
})




module.exports = {
    userRouter:userRouter
}
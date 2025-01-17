
const {Router}=require('express');
const {userModel, courseModel, purchaseModel}=require('../db');
const jwt=require('jsonwebtoken');

const {JWT_USER_PASSWORD}=require('../config');
const { userMiddleware } = require('../middlewares/user');


const userRouter=Router();


userRouter.post('/signup', async function (req, res){
    try{    
        const { email, firstName, lastName, password } = req.body; // destructuring the req
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
                password
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
    const { email, password }= req.body;
    //use bcrypt lib

    // ideally passwrod is hased hence the user provide passwrod 
    // could not be compared byh the db passwrd 
    const user= await userModel.findOne({
        email: email,
        password:password
    });
    // if we ussed find the user will return an empty array
    // if we used find one the it will retun ubnderfined or the user object
    if(user){
        const token = jwt.sign({
            id : user._id
        }, JWT_USER_PASSWORD);

        //do cookie logic if using cookies

        res.json({
            token: token
        })
    } else {
        const sign = await userModel.findOne({
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

userRouter.get('/purchases', userMiddleware, async function(req,res){
    const userId=req.userId;
    const purchases = await purchaseModel.find({
        userId: userId
    })
    res.json({
        message: "what are the courses purched by user",
        purchases
    })
})




module.exports = {
    userRouter:userRouter
}
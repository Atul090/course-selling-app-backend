
const {Router}=require('express');
const {userModel}=require('../db');
const jwt=require('jsonwebtoken');

const JWT_USER_PASSWORD= "ATUL"

const userRouter=Router();


userRouter.post('/signup', async function (req, res){
    const { email, firstName, lastName, password } = req.body; // destructuring the req
    // TODO: HAsh the password for security ## 
    try{
        const user=userModel.findOne({ email: email }) // if it was find then it would return an empty array
        if(user){
            return res.json({
                message: "User already exists, Please sign in!"
            })
        }
        await userModel.create({
            email,
            firstName,
            lastName,
            password
        })
        res.json({
            message: "sign up done"
        })
    } catch(err){
        console.log(err);
        res.status(500).json({
            message: "error occured during sign up"
        })
    }
})

userRouter.post('/signin', async function(req,res){
    const { email, password}= req.body;
    // ideally passwrod is hased hence the user provide passwrod 
    // could not be compared byh the db passwrd 
    const user= await userModel.findOne({
        email: email,
        password:password
    });
    if(user){
        const token = jwt.sign({
            id : user._id
        }, JWT_USER_PASSWORD);
        //do cookie logic if using cookies
        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
})

userRouter.get('/purchases', function(req,res){
    res.json({
        message: "what are the courses purched by user"
    })
})




module.exports = {
    userRouter:userRouter
}
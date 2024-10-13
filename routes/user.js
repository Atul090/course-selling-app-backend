
const {Router}=require('express');
const {userModel}=require('../db');
const userRouter=Router();


userRouter.post('/signup', function (req, res){
    res.json({
        message: "sign up endpoint"
    })
})

userRouter.post('/signin', function(req,res){
    res.json({
        message: "sign in endpoint"
    })
})

userRouter.get('/purchases', function(req,res){
    res.json({
        message: "what are the courses purched by user"
    })
})




module.exports = {
    userRouter:userRouter
}

const {Router}=require('express');

const userRouter=Router();


userRouter.post('/user/signup', function (req, res){
    res.json({
        message: "sign up endpoint"
    })
})

userRouter.post('/user/signin', function(req,res){
    res.json({
        message: "sign in endpoint"
    })
})

userRouter.get('/user/purchases', function(req,res){
    res.json({
        message: "what are the courses purched by user"
    })
})




module.exports = {
    userRouter:userRouter
}
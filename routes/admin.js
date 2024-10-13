
const {Router}=require('express');
const adminRouter=Router();

const {adminModel}=require('../db');

// adminRouter.use(adminMiddleware)

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


adminRouter.post('/signup',function(req,res){
    res.json({
        message:"admin signup"
    })
})

adminRouter.post('/signin',function(req,res){
    res.json({
        message:"admin signin"
    })
})


module.exports={
    adminRouter
}
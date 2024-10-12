const {Router}=require('express');
const courseRouter=Router();

courseRouter.get('/preview', function(req, res){
    res.json({
        message: "all couses endpoint"
    })
})

courseRouter.post('/purchase', function (req, res){
    res.json({
        message: " when a user wishes to purchase a course "
    })
})


module.exports={
    courseRouter: courseRouter
}
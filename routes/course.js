

function createCourseRoutes (app){


    app.get('/courses', function(req, res){
        res.json({
            message: "all couses endpoint"
        })
    })

    app.post('/course/purchase', function (req, res){
        res.json({
            message: " when a user wishes to purchase a course "
        })
    })


}

module.exports={
    createCourseRoutes
}
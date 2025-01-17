
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectId= mongoose.Types.ObjectId;


const userSchema=new Schema({
    email: { type: String , unique: true},
    firstName: String,
    lastName: String,
    password: String
})

const adminSchema = new Schema({
    email: { type: String , unique: true},
    firstName: String,
    lastName: String,
    password: String
})

const purchaseSchema = new Schema({
    courseId : ObjectId,
    userId: ObjectId
})

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorID: ObjectId
})

// ideally the cpurse content shoulb be ALSo present and the table
// const contentSchema = new Schema({})

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema)


module.exports = {
    userModel,
    adminModel,
    purchaseModel,
    courseModel
}
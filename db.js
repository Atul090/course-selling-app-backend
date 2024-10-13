
const mongoose = require('mongoose');
// const env=require('dotenv')
const dotenv=require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
console.log('connect to db')
const Schema = mongoose.Schema;

const ObjectId= mongoose.Types.ObjectId;


const userSchema=new Schema({
    email: { type: String , unique: true},
    firstname: String,
    lastname: String,
    password: String
})

const adminSchema = new Schema({
    email: { type: String , unique: true},
    firstname: String,
    lastname: String,
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
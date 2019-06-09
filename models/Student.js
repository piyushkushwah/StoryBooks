const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    studentid:{
        type:String,
        required:true
    },
    studentname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    class1:{
        type:Number,
        required:true
    },
    enrollmentyear:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

mongoose.model('students',StudentSchema)
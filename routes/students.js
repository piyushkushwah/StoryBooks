const express = require('express');
const mongoose =require('mongoose');
const router = express.Router();
//student model 
require('../models/Student');
const Student = mongoose.model('students');
//student get route
router.get('',(req,res)=>{
    Student.find()
    .sort({date:'desc'})
    .then(students=>{
    res.render('students/student',{
        students:students
    });
    
   });
    
});
//student edit route
router.get('/edit',(req,res)=>{
    res.render('students/edit');
});

//student post route
router.post('',(req,res)=>{
   const newStudent = {
        studentid:req.body.studentid,
       studentname:req.body.studentname,
       email:req.body.email,
       enrollmentyear:req.body.enrollmentyear,
       class1:req.body.class1,
        city:req.body.city,
        country:req.body.country
   }
   new Student(newStudent).save().then(student=>{
       res.redirect('/student');
   })
   console.log(req.body);
});
//student put route
router.put('/edit',(req,res)=>{
   });

module.exports = router
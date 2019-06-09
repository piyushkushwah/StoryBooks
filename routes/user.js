const express = require('express');
const router = express.Router();
//User login Get Route
router.get('/login',(req,res)=>{
    res.render('user/login');
});
//user register Get route
router.get('/register',(req,res)=>{
    res.render('user/register');
});
//user login Post Route
router.post('/login',(req,res)=>{
    res.send('User');
});
//user register login route
router.post('/register',(req,res)=>{
    res.send('User');
});

module.exports = router
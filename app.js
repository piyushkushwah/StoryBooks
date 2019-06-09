const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//Connect mongoose
mongoose.connect('mongodb://localhost:27017/studentapp',{
    useNewUrlParser:true
}).then(()=>{
    console.log("MongoDb Connected...");
}).catch(err=>{
    console.log(err);
});
//Load Routes
const students = require('./routes/students');
const user = require('./routes/user');

//Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//Main route
app.get('/',(req,res)=>{
    const titleName = 'Welcome To StudentApp';
    res.render('index');
});

//use student route
app.use('/student',students);
//use user route
app.use('/user',user);

app.listen(3000,()=>{
    console.log('server started at 3000 port');
});
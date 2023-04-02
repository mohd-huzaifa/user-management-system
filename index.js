const express = require('express');
require('./server/controller/services/routes/database/mogoose');
const dotenv = require('dotenv');
dotenv.config({path:'config.env'})
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const PORT = process.env.PORT || 5555

app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine",'ejs');
app.set("views",path.resolve(__dirname,'views/'))


//static files

app.use('/css',express.static(path.resolve(__dirname,'assets/css')));
app.use('/img',express.static(path.resolve(__dirname,'assets/img')));
app.use('/js',express.static(path.resolve(__dirname,'assets/js')));
app.use('/',require('./server/controller/services/routes/route'))



app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
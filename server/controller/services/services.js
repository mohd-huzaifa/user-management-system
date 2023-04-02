const axios = require('axios');

exports.homeRoute = (req,res)=>{
    axios.get('http://localhost:3595/api/create')
    .then(response=>{
        res.render('index',{users:response.data});
    })
    .catch(err=>{
        res.send({
            msg : err
        })
    })
}

exports.addUserRoute = (req,res)=>{
    res.render('add_user');
}

exports.updateUserRoute = (req,res)=>{
    axios.get('http://localhost:3595/api/create',{params:{id:req.query.id}})
    .then(response=>{
        console.log(response);
        res.render('update_user',{user:response.data});
        
    })
    .catch(err=>{
        res.send({msg:err.message})
    })
   
}
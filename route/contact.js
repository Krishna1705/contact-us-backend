const express=require('express');

const controller=require('../controller/contactController');
const appConfig=require('./../config/appConfig')
const baseUrl=appConfig.apiVersion +'/users'

let setRouter=(app)=>{
    app.get('/get-msg',controller.getmessage);
  
    app.post(baseUrl+'/userinfo',controller.createUser);
}

module.exports={
    setRouter:setRouter
}

const express = require('express');
const mongoose=require('mongoose')
const UserModel = mongoose.model('Contact')
var nodemailer = require('nodemailer');

let getmessage=(req,res)=>{
    res.send("Its a GET Request");
    };
    


//API for create=ing user  information
let createUser= (req, res) => {

    //let today=Date.now()
  //  let today = time.getLocalTime()
  //  console.log('TIME: ' + today)
  //  let blogId = shortid.generate()
    //create instance of the blogmodel

    let newUser= new UserModel({
      //  blogId: blogId,
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      message:req.body.message
       // created: today,
        //lastModified: today
    })


    newUser.save((err, result) => {
        if (err) {
            console.log(err)
           //let apiResponse = response.generate(true, "Error Occured", 500, null)
            res.send(err)

        } else {
           // let apiResponse = response.generate(false, "Blog Created successfully", 200, result)
            res.send(result)
        }

    })

//`````````````````````````````````````````````````````````````````````````````
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:'ridpatel2907@gmail.com',
      pass:'pri.2907'
    }
  });
  
  var mailOptions = {
      from:'ridpatel2907@gmail.com',
   
   // to: 'krishupatel19@gmail.com, ridpatel2907@gmail.com',
    to:newUser.email,
    subject: 'Pinginx.com',
    text: `Hello...${newUser.name}\n
                Thank you for contacting us.we will contact you in next 24-48 hours.\n
                Thnaks and Regards\n
                Pinginx.com`
  };
  
  var mailOptions1 = {
    from:'ridpatel2907@gmail.com',
    to:'ridpatel2907@gmail.com',
    subject: 'NEW USER INQUARY',
    text: `YOU HAVE ONE NEW INQUIRY!!!...DETAILS ARE AS FOLLOWS: \n
           NAME:${newUser.name} \n
           EMAIL:${newUser.email}\n
           PHONE:${newUser.phone}\n 
           MESSAGE:${newUser.message}`
           
  }
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  transporter.sendMail(mailOptions1, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}//end of create blog function




    module.exports={
        getmessage:getmessage,
        createUser:createUser
    }
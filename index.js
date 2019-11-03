const express=require('express');
const appConfig=require('./config/appConfig')
//creating an instance of express

const app=express();

//add follow line for adding route
const fs=require('fs');

//add follow line for mongoose
const mongoose=require('mongoose');

//add body-parser for body parameters(ihva installed it via cmd also ..npm install body-parser --save)
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
//add middleware for body-parameters
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())



//add bootstrap models
let modelsPath='./models'
fs.readdirSync(modelsPath).forEach(function(file)
{//readdir Sync will check if any .js file exist inside models folder or not
if(file.indexOf('.js'))require(modelsPath+'/'+file)

});//end of bootstrap models


//add bootstrap route

let routesPath='./route'
fs.readdirSync(routesPath).forEach(function(file){//readdir Sync will check if any .js file exist inside routes folder or not
if(file.indexOf('.js')){
    console.log("including the following file")
    console.log(routesPath+'/'+file)
    let route=require(routesPath+'/'+file)
    route.setRouter(app);
}
});//end of bootstrap route


app.listen(appConfig.port,()=>{

    console.log("ex app is running on port 3000");
    //create a mongodb connection via mongoose
  // let db=mongoose.connect(appConfig.db.uri,{ useUnifiedTopology: true })
  let db= mongoose.connect(appConfig.db.uri, { useNewUrlParser: true,useUnifiedTopology: true })
  // let db= mongoose.connect(appConfig.db.uri, { useMongoClient: true })
});

//mongoose connection error
mongoose.connection.on('error',function(err){
    console.log('database connection error');
    console.log(err)
})//end of mongoose connection error

//mongoose connection success msg
mongoose.connection.on('open',function(err){
   if(err){ 
          console.log('database error');
         }else{
             console.log('database connection open success')
         }

})//end of mongoose connection success msg





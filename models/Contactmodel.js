const mongoose=require('mongoose');
//mongoose itself contain schema defination
const Schema=mongoose.Schema;

let contactSchema=new Schema({
   
    name:{
        type:String,
        default:''
    },

    email:{
        type:String,
        default:''
        //unique:true
    },

    phone:{
        type:Number,
        default:''
    },

    message:{
        type:String,
        default:''
    }

})

mongoose.model('Contact',contactSchema)


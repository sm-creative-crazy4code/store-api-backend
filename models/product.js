const mongoose= rerquire("mongoose")
const ProductSchema= mongoose.Schema({
name:{
    type:String,
    required:[true,"productname must be provided"]
},
price:{
    type:Number,
    required:[true,"product price must be provided"]
},
featured:{
    type:Boolean,
    default:false
},
rating:{
    type: Number,
    default:4.5
},
createdAt:{

    type:Date,
    default:Date.now()
},
company:{
    type:String,
    enum:{
        value:['ikea','liddy','caressa','marcos']},
        message:'{VALUE} not supported',

},





})



module.exports=mongoose.model('Products',ProductSchema)
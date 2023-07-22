const {Schema,model, Types} = require('mongoose');

const schema = new Schema({
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }
})
module.exports = model('Item', schema)
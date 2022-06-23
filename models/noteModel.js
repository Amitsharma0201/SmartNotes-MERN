const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title:{
        type : String,
        reqiured: true 
    },
    content:{
        type : String,
        reqiured: true 
    },
    date:{
        type : Date,
        default: Date.now
    },
    user_id:{
        type : String,
        reqiured: true 
    },
    name:{
        type : String,
        reqiured: true 
    }


},{
    timestamps: true
})

module.exports = mongoose.model('Notes', noteSchema)
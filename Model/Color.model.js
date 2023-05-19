/**
 * Moongoose is an npm package
 * it is a ORM-Object relationship model
 * What will it do?
 * 1.It will help us to create data schema and understanding what Color data will look like
 * provide us with necessary  function  that help us to store or retrieve data
 */

const mongoose = require('mongoose');
/**
 * Schema is the blue print of how our data's gonna look like
 */

const ColorSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Age:{
        type:Number,
        required:true,
    },
    Mood:{
        type:String,
        required:true,
    },
    Occasion:{
        type:String,
        required:true,
    },
    Season:{
        type:String,
        required:true,
    },
   

});

module.exports = mongoose.model('ColorSuggestion',ColorSchema);
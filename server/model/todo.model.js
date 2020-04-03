const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// var cDate = new Date();
const TodoSchema = new Schema(
    {
title:
{
    type:String,
    required:true,
    minlength:3
},
desc:
{
    type:String,
    required:true,
},
priority:
{
    type:String,
    default:"Low",

},
date:
{
   type:String,
//    default: cDate.toISOString,
}
    },
    {
timestamps:true,
    }
    
);

const Todos = mongoose.model('Todos',TodoSchema);
module.exports = Todos;
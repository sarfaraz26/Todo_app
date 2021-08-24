const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    label : {
        type : String,
        required : [true, "Label is mandatory for Todo"]
    },
    status : {
        type : Boolean,
        default : false
    },
    email : {
        type : String,
        required : true,
        validate : {
            validator : value => {
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
            },
            message : "Invalid Email"
        }
    }
})

const TodoModel = mongoose.model('Todo',todoSchema);

module.exports = TodoModel;
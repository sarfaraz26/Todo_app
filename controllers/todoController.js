const Todo = require('../models/todo');

exports.insertTodo = async function(req,res){
    const todo = new Todo({
        label : "Mail time",
        status : true,
        email : "sarfaraz@test.com"
    })

    await todo.save(err=>{
        if(err)
            res.send(err)
        else
            res.send("Saved");
    });
}

exports.getTodos = async function(req,res){
    await Todo.find((err,docs)=>{
        if(err)
            res.send(err)
        else
            res.send(docs)
    })
}

exports.deleteTodo = async function(req,res){
    const { id } = req.params;
    await Todo.findByIdAndDelete(id,(err,doc)=>{
        if(err)
            res.send(err)
        else
            res.send("Deleted");
    })
}

exports.updateTodo = async function(req,res){
    const { id } = req.params;
    await Todo.findByIdAndUpdate(id,{label : "Sleep"},(err,doc)=>{
        if(err)
            res.send(err)
        else
            res.send("Updated");
    })
}

exports.getSingleTodo = async function(req,res){
    const { id } = req.params;
    
    await Todo.findOne({_id : id },(err,docs)=>{
        if(err)
            console.log(err);
        else
            res.send(docs);
    })
}
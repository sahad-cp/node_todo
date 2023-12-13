const Todo = require('../models/Todo');

exports.addTodo = async (req,res) => {
    try{
        if(!req.body.tittle || req.body.tittle.trim().length === 0) throw {tittle:"Title is required"};
        const newTodo = new Todo({
            tittle:req.body.tittle
        })
        const todo = await newTodo.save()
        res.status(200).json({success:true,data:todo})

    }catch(err){
        res.status(500).json({success:false,err})
    }
};

exports.fetchTodos = async (req,res)=>{
    try{
        const todos = await Todo.find()
        if(todos.length ===0){
            res.status(404).json({success:true,data:"Todos is empty"})
        }
        res.status(200).json({success:true,data:todos});
    }catch(err){
        res.status(500).json({success:false,err})
    }
}

exports.updateTodo = async(req,res)=>{
    try{
        const id = req.params.id;
        const todo = await Todo.findById(id,{$set:{tittle:req.body.tittle}},{new:true});
        res.status(200).json({success:true,data:todo});
    }catch(err){
        res.status(500).json({success:false,err})
    }
}

exports.deleteTodo = async (req,res) => {
    try{
        const todo = await Todo.deleteOne({_id:req.params.id});
        res.status(200).json({success:true,data:todo})
    }catch(err){
        res.status(500).json({success:false,err})
    }
};
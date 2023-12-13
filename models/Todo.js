const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    tittle:{
        type: 'string',
        require:true
    }
    
},{timestamps:true})

module.exports = mongoose.model('todo',todoSchema)
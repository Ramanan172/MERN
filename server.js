//Using Express
const express = require('express');

const mongoose = require('mongoose');

//create an instance of express
const app = express();
app.use(express.json())

//Sample in-memory storage for item
//let todos = [];

// connecting mongodb
mongoose.connect('mongodb://localhost:27017/mern-app')
.then(()=>{
    console.log('DB Connected!')
})
.catch((err)=>{
    console.log(err)
})
//Create a new todo Schema

const todoSchema = new mongoose.Schema({
    title:{
        required:true,
        type : String
    },
    description:String
})
//Create model
const todoModel = mongoose.model('Todo',todoSchema);

//Create a new todo item
app.post('/todos',async (req,res)=>{
    const {title,description} = req.body;
   // const newTodo = {
    //   id: todos.length +1,
       // title,
       // description
  //  };
   // todos.push(newTodo);
   // console.log(todos);
    try{
        const newTodo = new todoModel({title,description});
         await newTodo.save();
         res.status(201).json(newTodo);

    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message});

    }

})

//Get all items
app.get('/todos', async (req,res)=>{
    try{
        const todos = await todoModel.find();
        res.json(todos);
    }catch(error){
       console.log(error)
       res.status(500).json({message:error.message});
    }
    
} )
//Update a todo item
app.put("/todos/:id",(req,res)=>{
    const {title,description} =req.body;
    const id = req.params.id;
    const updateTodo = todoModel.findByIdAndUpdate(
        id,
        {title ,description}
    )
    if (!update )
})


//start the server
const port = 3000;
app.listen(port,()=>{
    console.log("Server is listening to port"+port);
})



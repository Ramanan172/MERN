//Using Express
const express = require('express');

//create an instance of express
const app = express();

//Create a new todo item
app.post('/todos',(req,res)=>{
    const {title,description} = req.body;
    const newTodo = {
        id:0,
        title,
    }
})


//start the server
const port = 3000;
app.listen(port,()=>{
    console.log("Server is listening to port"+port);
})



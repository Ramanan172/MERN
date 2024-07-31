//Using Express
const express = require('express');

//create an instance of express
const app = express();
//Define a route
app.get('/',(req,res) =>{
    res.send("Hello world!")
})

//start the server
const port = 3000;
app.listen(port,()=>{
    console.log("Server is listening to port"+port);
})



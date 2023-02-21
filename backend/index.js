const express =require('express')
const mongoose=require('mongoose')
const bodyParser    = require('body-parser');


const app=express()
app.use(bodyParser.json());
app.use(route)
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("yeah bro it is actually working")
})

const dbURI='mongodb+srv://kyapata:kyapata@cluster0.6zkxcym.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>app.listen(5000,()=>{
    console.log(`the server is running on http://localhost:5000`)
}))
.catch((err)=>{console.log(err)})
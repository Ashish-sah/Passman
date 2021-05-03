var express=require("express");
const app=express();

app.get('/', (req, res) => {
    res.send("home")
    
});

app.listen(process.env.PORT || 3000,(err)=>{
    if(!err)
    {
        console.log("server is fine!!!");


        
        }
})
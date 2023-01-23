import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
 
const PORT = process.env.PORT || 3500;
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send("Homepage");
});


app.listen(PORT,(err)=>{
    if(!err){
        console.log(`Server is running at port: ${PORT}`);
    }else{
        console.log(err);
    }
});


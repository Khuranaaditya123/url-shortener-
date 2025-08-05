import express from 'express'
import mongoose from 'mongoose';
import { shortUrl, getOriginalUrl } from './Controllers/url.js';
const app = express();

app.use(express.urlencoded({extended:true}))

mongoose.connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1",
    {
        dbName: "First_Project",
    }
)
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log(err));

app.get('/',(req, res)=>{
    res.render("index.ejs",{shortUrl: null})
})

app.post('/short',shortUrl)

app.get("/:shortCode", getOriginalUrl);

const port = 3000;
app.listen(port,()=>console.log(`server is running on port ${port}`))
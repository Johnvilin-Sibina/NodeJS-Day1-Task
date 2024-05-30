import express from "express";
import fs from "fs";
import {format} from "date-fns";


const app = express();
const PORT = 4000;

app.use(express.json())

app.get('/',(req,res)=>{
res.status(200).send(`Welcome to NodeJS file system management.
    To create a text(.txt) file go to "https://nodejs-day1-task-39lj.onrender.com/create-file"
    To get all the text(.txt) files in the folder go to "https://nodejs-day1-task-39lj.onrender.com/get-files"` 
)
})

//Create a .txt file
app.get('/create-file',(req,res)=>{
    const date = format(new Date(),'dd-MM-yyyy-hh-mm-ss');
    res.status(200).send(`${date}`);
    const filePath = `TimeStamp/${date}.txt`;
    fs.writeFileSync(filePath,`${date}`,"utf8")
})

//Read the files in the folder TimeStamp
app.get('/get-files',(req,res)=>{
const directoryPath = '\TimeStamp';
const fileList = fs.readdirSync(directoryPath);
res.status(200).send(`Files in the folder TimeStamp : ${fileList}`);
})

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})
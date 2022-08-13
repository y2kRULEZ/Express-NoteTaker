const router=require("express").Router()
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const fs=require("fs")
const db=require("../db/db.json");


router.get("/api/notes",(req,res)=>{
     res.json(db)
})


router.post("/api/notes", (req, res)=>{
    

    console.log(req.body)
    const{title,text} =req.body
    if (title && text ){
        const newNote = {
            title,
            text,
        }
        readAndAppend(newNote,'./db/db.json')
        res.json(`New Note Added!`)     
    }else{
        res.error('Error adding note')
    }

    //db is array, think about array function to add new element or value of an array
    //think about update the revised db with new data into the db.json file
    
    
})



module.exports=router
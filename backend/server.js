import express from "express";
//const express=require("express");
const app=express();
app.get("/api/notes",(req,res)=>{
    res.status(200).send("you got 10 notes!");
});
app.post("/api/notes",(req,res)=>{
    res.status(201).json({message:"post creates succeasfully"});
});
app.put("/api/notes/:id",(req,res)=>{
    res.status(200).json({message:"post updated successfully"});
});
app.delete("/api/notes/:id",(req,res)=>{
    res.status(200).json({message:"post deleted!"});
});
app.listen(5001,()=>{
    console.log("server started on 5001!");
});
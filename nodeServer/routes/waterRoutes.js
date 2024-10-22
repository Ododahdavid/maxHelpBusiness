import mongoose from "mongoose";
import express from "express"
import water from "../models/waterModel.js";

const router = express.Router();


// end point to get all water stock
router.get("/get/water", async(req, res, next)=>{
    try{
        const waterItems = await water.find();
        res.json(waterItems)
    }
    catch(err){
        res.status(500).json({ message: 'Error fetching water stock' });
    }
})
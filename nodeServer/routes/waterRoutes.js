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

// endpoint to add a new water item to the water business
router.post("/add/water", async(req, res, next)=>{
    const{name, type, quantity, price, reorderLevel} = req.body;
    const newWater = new water({name, type, quantity, price, reorderLevel});

    try{
        const savedWater = await newWater.save();
        res.json(savedWater)
    }
    catch(err){
        res.status(500).json({ message: 'Error adding new water item' });
    }
})

export default router
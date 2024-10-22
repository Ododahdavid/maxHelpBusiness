import mongoose from "mongoose";
import express from "express";
import Grocery from "../models/groceryModel.js";

// expected endpoints
/*
Add items to the inventory.
Update stock levels when simulating sales.
Fetch items for each unit (for viewing or managing inventory).
Delete items (optional, for admin use).
*/
 const router = express.Router()

// endpoint to get all grocery items
 router.get("/get/grocery/items", async(req, res, next) =>{
    try{
        const groceries = await Grocery.find();
        res.json(groceries)
    }
    catch(err){
        res.status(500).json({ message: 'Error fetching groceries' });
    }
 })

//  endpoint to add a  new grocery item
router.post("/new/grocery/item", async(req, res, next)=>{
    const {name, quantity, price, reorderLevel} = req.body
    const newGrocery = new Grocery({name, quantity, price, reorderLevel})
    try{
        const existingItem = await Grocery.findOne({name})
        if(existingItem.length > 0){
            return res.status(400).json({ message: 'This item is still in stock' });
        }
        const savedGrocery = await newGrocery.save()
        res.json(savedGrocery)
    }
    catch(err){
        res.status(500).json({ message: 'Error adding grocery item' });
    }
})
// installing nodecron package for a scheduling task after every 2 minutes

export default router
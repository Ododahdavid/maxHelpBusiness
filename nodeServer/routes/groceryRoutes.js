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
 router.get("get/grocery/items", async(req, res, next) =>{
    try{
        const groceries = await Grocery.find();
        res.json(groceries)
    }
    catch(err){
        res.status(500).json({ message: 'Error fetching groceries' });
    }
 })
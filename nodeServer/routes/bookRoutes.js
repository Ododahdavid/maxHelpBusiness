import express from "express";
import mongoose from "mongoose"
import Book from "../models/bookModel.js";


const router = express.Router()

// endpoint to get all books in stock
router.get("/get/books", async(req,res,next) =>{
    try{
        const availableBooks = await Book.find();
        res.json(availableBooks)
    }
    catch(err){
        res.status(500).json({ message: 'Error fetching books' });
    }
})

// endpoint to input new books

router.post("/add/book", async(req,res,next) =>{
    const{title, author, quantity, price, reorderLevel} = req.body;
    const newBook = new Book({title, author, quantity, price, reorderLevel});
    // const newBook = new Book({
    //     title: req.body.title,
    //     author: req.body.author,
    //     genre: req.body.genre,
    //     quantity: req.body.quantity
    // });

    try{
        const savedBook = await newBook.save();
        res.json(savedBook)
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
})
export default router
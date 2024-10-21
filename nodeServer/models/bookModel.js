import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: [true, "please enter the title of the book"] },
    author: { type: String, required: [true, "please enter the author of the book"] },
    quantity: { type: Number, required: [true, "please enter the quantity of the selected book"] },
    price: { type: Number, required: [true, "please enter the price for this book"] },
    reorderLevel: { type: Number, required: [true, "please enter the reoder level amount"], default: 20 },
})

const Book = mongoose.model("Book", bookSchema);

export default Book;
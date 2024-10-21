import mongoose from "mongoose"

const grocerySchema = new mongoose.Schema({
    name: { type: String, required: [true, "please enter a groecry item"] },
    quantity: { type: Number, required: [true, "please enter item quantity"] },
    price: { type: Number, required: [true, "please enter thr price fir this grocery item"] },
    reorderLevel: { type: Number, required: [true, "enter reorder level"], default: 100 }, // Stock level to trigger re odering alert
})

const Grocery = mongoose.model("grocery", grocerySchema)

export default Grocery
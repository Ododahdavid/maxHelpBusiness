import mongoose from "mongoose"

const waterSchema = new mongoose.Schema({
    type: { type: String, required: true }, // E.g., "Small Bottle", "Large Bottle"
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    reorderLevel: { type: Number, required: true },
})

const water = mongoose.model('water', waterSchema)

export default water
import mongoose from "mongoose"

const waterSchema = new mongoose.Schema({
    name:{type:String, required:[true, "please enter the name of the water "]},
    type: { type: String, required: [true, "please enter the type of water you wish to stock"] }, // E.g., "Small Bottle", "Large Bottle"
    quantity: { type: Number, required: [true, "please enter the quantity of water you wish to stock"] },
    price: { type: Number, required: [true, "please enter the desired price of water"] },
    reorderLevel: { type: Number, required: [true, "pelase enter the reorder level of this item"], default: 200 },
})

const water = mongoose.model('water', waterSchema)

export default water
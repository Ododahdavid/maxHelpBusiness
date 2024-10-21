import mongoose from  "mongoose"

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true }, // Stock level for ingredients or prepared meals
  price: { type: Number, required: true },
  reorderLevel: { type: Number, required: true },
});

const MenuItem = mongoose.model('menuItem', MenuItemSchema);

export default MenuItem;

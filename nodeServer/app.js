import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"

import Grocery from "./models/groceryModel.js";
import scheduleStockReduction from "./routes/stockScheduler.js";
import groceryRoutes from "./routes/groceryRoutes.js"

dotenv.config({ path: './config.env' });
const app = express();

const PORT = process.env.PORT || 7800;

let MONGO_URI = '';
if (process.env.NODE_ENV === 'production') {
  MONGO_URI = process.env.HOSTED_CONN;
} else {
  MONGO_URI = process.env.LOCAL_CONN;
} 

scheduleStockReduction()
app.use(cors());
app.use(express.json());
// app.use() routes
app.use("/api/v1/", groceryRoutes)


app.use('/', (req, res) => {
    res.send('DEAD END...try again');
  });


  mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error(err);
  });



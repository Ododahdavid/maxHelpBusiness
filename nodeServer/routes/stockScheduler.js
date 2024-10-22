// stockScheduler.js
// i made this make shift stock reducer simulator to simulate items being siold in these different businesses owned by chief maxhelp
// the goal is to reduce stock from theses businesses in every 5 minutes (might change it to 2)
import cron from 'node-cron';
import mongoose from 'mongoose';
import express from 'express';
import Grocery from '../models/groceryModel.js';
import water from '../models/waterModel.js';
import Book from '../models/bookModel.js';
import MenuItem from '../models/menuItemModel.js';

// Function to reduce stock for all businesses
const reduceStockForBusiness = async (businessModel) => {
  try {
    const items = await businessModel.find();

    items.forEach(async (item) => {
      const randomReduction = Math.floor(Math.random() * 10) + 1;
      const newQuantity = Math.max(item.quantity - randomReduction, 0);
      item.quantity = newQuantity;
      await item.save();
      console.log(`${item.name || item.title} stock reduced by ${randomReduction}. New quantity: ${newQuantity}`);
    });
  } catch (err) {
    console.error('Error reducing stock for business:', err);
  }
};

// Schedule the stock reduction task to run every 5 minutes
const scheduleStockReduction = () => {
  cron.schedule('*/1 * * * *', async () => {
    console.log('Running stock reduction...');

    // Reduce stock for each business
    await reduceStockForBusiness(water);
    await reduceStockForBusiness(Grocery);
    await reduceStockForBusiness(Book);
    await reduceStockForBusiness(Restaurant);
  });
};

export default scheduleStockReduction;

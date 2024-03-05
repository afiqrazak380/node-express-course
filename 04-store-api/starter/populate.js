// Loading Environment Variables
require('dotenv').config();

// Importing Dependencies
const connectDB = require('./db/connect');
const Product = require('./models/product');

// Importing JSON Data
const jsonProduct = require('./products.json');

// Asynchronous Function for Database Connection
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProduct);
    console.log('Success !!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// Executing Start Function
start();

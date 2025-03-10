const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'product price must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  company: {
    type: String,
    values: ['ikea', 'liddy', 'caressa', 'marcos'],
    message: '{VALUES} is not supported',
    // enum: ['ikea', 'liddy', 'caressa', 'marcos'],
  },
});

module.exports = mongoose.model('Product', productSchema);

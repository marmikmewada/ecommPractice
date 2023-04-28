const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true },
  images: [{ type: String }],
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;

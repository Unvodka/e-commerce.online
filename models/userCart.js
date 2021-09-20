const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  products: {
    type: Array,
  },
  totalPrice: {
    type: Number,
  }
})

module.exports = mongoose.model('userCart', cartSchema)
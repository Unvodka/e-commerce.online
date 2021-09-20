const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
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

module.exports = mongoose.model('order', orderSchema)
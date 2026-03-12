const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    minlength: 2
  },
  drink: {
    type: String,
    required: true,
    enum: ["Latte", "Espresso", "Cappuccino", "Mocha", "Americano", "Cold Brew"]
  },
  size: {
    type: String,
    required: true,
    enum: ["Small", "Medium", "Large"]
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "completed", "cancelled"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);
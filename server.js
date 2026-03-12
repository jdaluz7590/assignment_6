const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const orderRoutes = require("./routes/orders");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Database connection failed:", error.message);
  });

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/products", (req, res) => {
  res.status(200).json([
    { id: 1, name: "Espresso", price: 2.5 },
    { id: 2, name: "Americano", price: 3.0 },
    { id: 3, name: "Latte", price: 4.5 },
    { id: 4, name: "Cappuccino", price: 4.75 },
    { id: 5, name: "Mocha", price: 5.0 },
    { id: 6, name: "Cold Brew", price: 4.0 },
    { id: 7, name: "Macchiato", price: 4.25 }
  ]);
});

app.use("/orders", orderRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
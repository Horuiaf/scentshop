const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/perfumeDB');

// schema
const Cart = mongoose.model('Cart', {
  title: String,
  price: Number
});

// add to cart
app.post('/cart', async (req, res) => {
  const item = new Cart(req.body);
  await item.save();
  res.send(item);
});

// get cart
app.get('/cart', async (req, res) => {
  const items = await Cart.find();
  res.send(items);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.delete('/cart/:id', async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});
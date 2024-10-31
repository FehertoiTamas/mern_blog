const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User')
const app = express();
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://blog:aoY64cVWGkX6aOuv@cluster0.dwvfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    })
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error)
  }
})

app.listen(4000)

//mongodb+srv://blog:aoY64cVWGkX6aOuv@cluster0.dwvfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//blog aoY64cVWGkX6aOuv
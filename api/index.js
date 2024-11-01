const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User')
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const secret = 'asgfs565sdgt4sgfh4f63d3htthg'

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
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
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json('ok')
    });
  } else {
    res.status(400).json('wrong credentials');
  }
})

app.listen(4000)

//mongodb+srv://blog:aoY64cVWGkX6aOuv@cluster0.dwvfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//blog aoY64cVWGkX6aOuv
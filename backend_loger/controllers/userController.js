const UserModel = require("../models/user");
const User = require("../models/user");
// const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const validUser = await UserModel.findOne({ username });
    if (validUser) {
      //compare the hashed password 
      res.status(201).json({ message: "Sucessfully login ", status: 201 });
    }
  } catch (error) {
    res.status(201).json({ message: "Failed to login", status: 500 });
  }
};





module.exports = {
  createUser,
  loginUser,
};

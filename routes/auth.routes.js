import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
const router = express.Router();
const app = express();

router.post('/', async (req, res) => {
  const userMongo = await User.findOne({ email: req.body.email });
  if (!userMongo) return res.status(400).send('User not registered');

  const isMatch = await bcrypt.compare(req.body.password, userMongo.password);
  if (!isMatch) return res.status(400).send('Incorrect password');

  const token = userMongo.generateAuthToken();
  res.send(token);
});

export default router;
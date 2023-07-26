import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    //validation user
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(['The email already exists']);

    const passwordhashed = await bcrypt.hash(password, 12);

    const newUser = new User({
      email,
      password: passwordhashed,
      username,
    });

    const savedUser = await newUser.save();
    const token = await createAccessToken({ id: savedUser._id });

    res.cookie('token', token);

    res.json({
      id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json({ message: 'User not found' });

    const matchPassword = await bcrypt.compare(password, userFound.password);

    if (!matchPassword)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie('token', token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: 'User not found' });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

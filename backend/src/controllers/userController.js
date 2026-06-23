import bcrypt from 'bcryptjs';
import { findUserByEmailOrUsername, createUser } from '../models/userModel.js';

/**
 * Register a new user
 */
export const registerUser = async (req, res, next) => {
  const { email, username, password, name } = req.body;
  try {
    console.log('Registering user:', { email, username, name });

    // 1. Validate required fields
    if (!email || !username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email, username, and password are required fields.'
      });
    }

    // 2. Check if a user with the same email or username already exists
    const existingUser = await findUserByEmailOrUsername(email, username);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'A user with this email or username already exists.'
      });
    }

    // 3. Hash the password securely
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create and save user via our Model layer
    const newUser = await createUser({
      email,
      username,
      password: hashedPassword,
      name
    });

    // 5. Send success response with created user details
    res.status(201).json({
      success: true,
      message: 'User registered successfully!',
      data: newUser
    });
  } catch (error) {
    next(error);
  }
};

import express from 'express';
import { registerUser } from './controllers/userController.js';

const router = express.Router();

/**
 * @swagger
 * /api/v1/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - username
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: testuser@example.com
 *               username:
 *                 type: string
 *                 example: testuser
 *               password:
 *                 type: string
 *                 format: password
 *                 example: securePassword123
 *               name:
 *                 type: string
 *                 example: Test User
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: User registered successfully
 *       400:
 *         description: Bad request (validation error or email/username already taken)
 */
router.post('/users/register', registerUser);

export default router;

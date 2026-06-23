import prisma from '../config/db.js';

/**
 * Find a user by their email or username
 * @param {string} email 
 * @param {string} username 
 * @returns {Promise<Object|null>}
 */
export const findUserByEmailOrUsername = async (email, username) => {
  return await prisma.user.findFirst({
    where: {
      OR: [
        { email },
        { username }
      ]
    }
  });
};

/**
 * Create a new user in the database
 * @param {Object} userData 
 * @returns {Promise<Object>}
 */
export const createUser = async (userData) => {
  return await prisma.user.create({
    data: userData,
    // Use select to omit the password from the returned object for security
    select: {
      id: true,
      email: true,
      username: true,
      name: true,
      role: true,
      bio: true,
      avatar: true,
      createdAt: true,
      updatedAt: true
    }
  });
};

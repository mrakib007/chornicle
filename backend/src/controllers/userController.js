// User & Authentication controllers will be implemented here step-by-step.

/**
 * Register a new user
 */
export const registerUser = async (req, res, next) => {
  const { email, username, password, name } = req.body;
  try {
    console.log('Incoming Register Request Payload:', { email, username, password: password ? '[HIDDEN]' : undefined, name });

    // Step 2: Validate input fields
    if (!email || !username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email, username, and password are required fields.'
      });
    }

    // Temporary response to verify step 1 & 2
    res.status(200).json({
      success: true,
      message: 'Step 1 & 2 successful! Inputs validated.',
      data: { email, username, name }
    });
  } catch (error) {
    next(error);
  }
};

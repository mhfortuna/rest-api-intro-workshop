const db = require("../models");

async function authMiddleware(req, res, next) {
  try {
    // Get Token from request and decode any existing credentials
    // userClaims: obj with user information

    const user = await db.User.findOne({
      email: userClaims.email,
    });

    if (!user) {
      throw new Error("Invalid token");
    }

    req.user = {
      email: userClaims.email,
      id: user._id,
    };

    next();
  } catch (error) {
    res.status(401).send({
      data: null,
      error: error,
    });
  }
}

module.exports = {
  authMiddleware: authMiddleware,
};

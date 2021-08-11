const { verifyToken } = require("../services/auth");

async function authMiddleware(req, res, next) {
  try {
    const x = 1;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      // const { token } = req.body;
      let userClaims = await verifyToken(req.headers.authorization.substr(7));
      req.user = userClaims;
      next();
    }
    throw "No Bearer token found";
  } catch (error) {
    console.log(error);
    return res.status(401).send(error);
  }
}

module.exports = {
  authMiddleware: authMiddleware,
};

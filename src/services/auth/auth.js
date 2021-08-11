const jwt = require("jsonwebtoken");
const { config } = require("../../config");

function generateToken(data) {
  return jwt.sign(data, config.auth.secret, { expiresIn: "600s" });
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    const response = jwt.verify(token, config.auth.secret);
    if (response == undefined) reject("JWT validation error");
    resolve(response);
  });
}

module.exports = {
  generateToken: generateToken,
  verifyToken: verifyToken,
};

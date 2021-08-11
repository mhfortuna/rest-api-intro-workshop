const bcrypt = require("bcrypt");

async function encryptString(string) {
  const saltRounds = 10;
  return (hashedString = await bcrypt.hash(string, saltRounds));
}

async function matchEncrypted(string, hashedString) {
  let match;
  const result = await bcrypt.compare(string, hashedString);
  return result;
  // return match;
}

module.exports = {
  encryptString: encryptString,
  matchEncrypted: matchEncrypted,
};

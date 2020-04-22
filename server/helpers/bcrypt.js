const bcrypt = require('bcrypt');

async function hashPassword(pass) {
  const hashed = await bcrypt.hash(pass, 10);
  return hashed;
}

async function decryptPassword(loginPass, dbPass) {
  const decrypted = await bcrypt.compare(loginPass, dbPass);
  return decrypted;
}

module.exports = {
  hashPassword,
  decryptPassword,
};

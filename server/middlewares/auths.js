const jwt = require('jsonwebtoken');
const { User } = require('../models');

class Auth {
  static authentication(req, _, next) {
    const { token } = req.headers;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw new Error('Token not found!');
      } else {
        req.UserId = decoded.UserId;
        req.Role = decoded.Role;

        next();
      }
    });
  }

  static authorization(req, _, next) {
    const { UserId, Role } = req;

    User.findOne({
      where: {
        UserId,
        Role,
      },
    })
      .then((user) => {
        if (user.id !== UserId) {
          throw new Error('Access denied!');
        } else {
          next();
        }
      })
      .catch(next);
  }
}

module.exports = Auth;

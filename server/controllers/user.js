const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { decryptPassword } = require('../helpers/bcrypt');

class UserController {
  static register(req, res, next) {
    const { email, username, password } = req.body;
    const role = 'user';

    const struct = {
      email,
      username,
      password,
      role,
    };

    User.create(struct)
      .then((success) => {
        res.status(201).json({
          message: 'Successfully created new user!',
          success,
        });
      })
      .catch(next);
  }

  static login(req, res, next) {
    const { email, password } = req.body;
    let userData = null;

    User.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (!user) {
          throw new Error('User not found!');
        } else {
          userData = user;
          const decrypt = decryptPassword(password, user.password);

          return decrypt;
        }
      })
      .then((decrypted) => {
        if (!decrypted) {
          throw new Error('Wrong password!');
        } else {
          const token = jwt.sign(
            {
              UserId: userData.id,
              Role: userData.role,
            },
            process.env.JWT_SECRET
          );

          res.status(200).json({
            message: 'Successfully logged in!',
            token,
          });
        }
      })
      .catch(next);
  }
}

module.exports = UserController;

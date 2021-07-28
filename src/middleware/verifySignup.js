const db = require("../models");
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  /* Cek username duplicated or not */
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Username already used!" });
      return;
    }

    /* Cek email duplicated or not */
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Email already used!" });
        return;
      }

      next();
    });
  });
};

checkPasswordLength = (req, res, next) => {
  if(req.body.password.length < 8 ) {
    res.status(400).send({
      message: "Password length must 8 or higher"
    });
    return;
  }
  next();
}

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkPasswordLength
};

module.exports = verifySignUp;
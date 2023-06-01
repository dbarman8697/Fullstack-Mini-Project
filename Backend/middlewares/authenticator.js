const { UserModel } = require("../models/UserModel");

async function authenticator(req, res, next) {
  if (req.path == "/user/login") {
    const option = {
      expiresIn: "120000",
    };
    try {
      let data = await UserModel.find(req.body);
      if (data.length > 0) {
        next();
      } else {
        res.send({
          message: "username or password maybe wrong",
        });
      }
    } catch (error) {
      res.send({
        message: error.message,
      });
    }
  } else {
    next();
  }
}

module.exports = { authenticator };

const User = require("../models/user");

module.exports = {
  async store(req, res) {
    const { name, password, email } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.json(userExists);
    }

    await User.create({
      name,
      password,
      email
    });

    return res.json(req.body);
  }
};

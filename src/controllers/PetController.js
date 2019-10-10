const Pet = require("../models/pets");

module.exports = {
  async store(req, res) {
    const { name, birthDay, race, avatar } = req.body;

    const petExists = await Pet.findOne({ name, birthDay });
    try {
      if (petExists) {
        return res.json(petExists);
      }
    } catch (err) {
      return res.status(400).send({ error: "Registration Failed" });
    }
    await Pet.create({
      name,
      birthDay,
      race,
      avatar
    });

    return res.json(req.body);
  }
};

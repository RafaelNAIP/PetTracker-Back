const mongoose = require("../database");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    birthDay: {
      type: String,
      require: true
    },
    race: {
      type: String,
      require: true
    },
    avatar: String
  },
  {
    timestamps: true
  }
);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;

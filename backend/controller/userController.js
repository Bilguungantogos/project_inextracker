const { sql } = require("../config/pgDb");

const signup = (req, res) => {
  res.status(200).json({ message: "success" });
};

module.exports = { signup };

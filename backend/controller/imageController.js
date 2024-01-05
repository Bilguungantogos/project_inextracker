const { sql } = require("../config/pgDb");

const upload = async (req, res) => {
  console.log("IMAGE", req.file);
  const { userId } = req.params;
  //   const image = req.file;
  //   const img = Buffer.from();
  await sql`UPDATE users SET avatarimg=(${req.params.buffer}) WHERE id=${userId}`;

  res.status(201).json({ message: "success" });
};

module.exports = { upload };

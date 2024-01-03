const { sql } = require("../config/pgDb");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const findUser = await sql`SELECT email FROM users WHERE email=${email}`;
    if (findUser.length > 0) {
      return res.status(400).json({ message: "User email is already exist" });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data =
      await sql`INSERT INTO users(email, name, password) VALUES(${email}, ${name}, ${hashedPassword}) RETURNING id`;

    const { id } = data[0];
    res.status(201).json({ message: "success", user: { id } });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed" });
  }
};

const addcategory = async (req, res) => {
  try {
    const { category_color, category_img } = req.body;
    await sql`INSERT INTO usercategory(categoryColor, categoryImg) VALUES(${category_color},${category_img})`;
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "failed" });
    console.log(err);
  }
};

const signin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const findUser =
      await sql`SELECT name, email, password, id FROM users WHERE email=${userEmail}`;

    if (findUser.length === 0) {
      return res.status(400).json({ message: "user not found" });
    }

    const isCheck = bcrypt.compareSync(userPassword, findUser[0].password);

    if (!isCheck) {
      return res.status(400).json({ message: "wrong username or password" });
    }

    const { password, ...user } = findUser[0];

    res.status(201).json({ message: "success", user });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = {
  signup,
  signin,
  addcategory,
};

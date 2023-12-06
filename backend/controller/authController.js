const { sql } = require("../config/pgDb");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    await sql`INSERT INTO users(email, name, password) VALUES(${email}, ${name}, ${hashedPassword})`;
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "failed" });
    console.log(err);
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
      await sql`SELECT name, email, password FROM users WHERE email=${userEmail}`;

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
const transactionpost = async (req, res) => {
  try {
    const {
      user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id,
    } = req.body;
    await sql`INSERT INTO usertransaction(user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id) VALUES(${user_id},${name}, ${amount},  ${transaction_type}, ${description}, ${category_id})`;
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "failed" });
    console.log(err);
  }
};

const transactiondelete = async (req, res) => {
  try {
    const { transactionId } = req.params;
    await sql`DELETE from usertransaction WHERE id=${transactionId}`;
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "failed" });
    console.log(err);
  }
};
const transactionupdate = async (req, res) => {
  console.log(req.body, "aaaa");
  try {
    const { transactionId } = req.params;
    const { name, amount, transaction_type, description } = req.body;
    await sql`
    UPDATE usertransaction
    SET name=${name}, 
    amount=${amount}, 
    transaction_type=${transaction_type}, 
    description=${description} 
    WHERE id=${transactionId}`;
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "failed" });
    console.log(err);
  }
};

const transactionget = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const { name, amount, transaction_type, description } = req.body;
    await sql`
    UPDATE usertransaction
    SET name=${name}, 
    amount=${amount}, 
    transaction_type=${transaction_type}, 
    description=${description} 
    WHERE id=${transactionId}`;
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "failed" });
    console.log(err);
  }
};

module.exports = {
  signup,
  signin,
  addcategory,
  transactionpost,
  transactiondelete,
  transactionupdate,
  transactionget,
};

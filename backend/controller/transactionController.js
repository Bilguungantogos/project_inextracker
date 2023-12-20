const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {};

const createTransaction = async (req, res) => {
  try {
    const {
      user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id,
      updated_at,
    } = req.body;

    const data = await sql`INSERT INTO usertransaction(user_id,
        name,
        amount,
        transaction_type,
        description,
        category_id,
        updated_at) VALUES(${user_id},${name}, ${amount},  ${transaction_type}, ${description}, ${category_id},${updated_at}) RETURNING *`;
    res.status(201).json({ message: "success", transaction: data[0] });
  } catch (err) {
    res.status(500).json({ message: "failed" });
    console.log(err);
  }
};

// const transactiondelete = async (req, res) => {
//   try {
//     const { transactionId } = req.params;
//     await sql`DELETE from usertransaction WHERE id=${transactionId}`;
//     res.status(201).json({ message: "success" });
//   } catch (err) {
//     res.status(500).json({ message: "failed" });
//     console.log(err);
//   }
// };
// const transactionupdate = async (req, res) => {
//   console.log(req.body, "aaaa");
//   try {
//     const { transactionId } = req.params;
//     const { name, amount, transaction_type, description } = req.body;
//     await sql`
//       UPDATE usertransaction
//       SET name=${name},
//       amount=${amount},
//       transaction_type=${transaction_type},
//       description=${description}
//       WHERE id=${transactionId}`;
//     res.status(201).json({ message: "success" });
//   } catch (err) {
//     res.status(500).json({ message: "failed" });
//     console.log(err);
//   }
// };

// const transactionget = async (req, res) => {
//   try {
//     const { transactionId } = req.params;
//     const { name, amount, transaction_type, description } = req.body;
//     await sql`
//       UPDATE usertransaction
//       SET name=${name},
//       amount=${amount},
//       transaction_type=${transaction_type},
//       description=${description}
//       WHERE id=${transactionId}`;
//     res.status(201).json({ message: "success" });
//   } catch (err) {
//     res.status(500).json({ message: "failed" });
//     console.log(err);
//   }
// };

module.exports = { createTransaction, getAllTransaction };

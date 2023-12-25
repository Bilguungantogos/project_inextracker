const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {
  try {
    const { userId } = req.params;

    const allTransaction =
      await sql`SELECT transaction_type, SUM(amount) FROM usertransaction WHERE transaction_type IS NOT NULL AND user_id=${userId} GROUP BY transaction_type;`;
    res.status(201).json({ message: "success", allTransaction });
    console.log(allTransaction);
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};

const createTransaction = async (req, res) => {
  try {
    const {
      user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id,
      updatedat,
    } = req.body;

    console.log(
      user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id,
      updatedat
    );

    const data = await sql`INSERT INTO usertransaction(user_id,
        name,
        amount,
        transaction_type,
        description,
        category_id,
        updatedAt) VALUES(${user_id},${name}, ${amount},  ${transaction_type}, ${description}, ${category_id},${updatedat}) RETURNING *`;
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

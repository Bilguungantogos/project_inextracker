const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {
  const { userId } = req.params;
  try {
    const transactions =
      await sql`SELECT tr.name, tr.amount, tr.createdat, tr.id, tr.transaction_type, ct.name as category_name, ct.categoryimg, ct.categorycolor FROM usertransaction tr INNER JOIN usercategory ct ON tr.category_id=ct.id WHERE tr.user_id=${userId} ORDER BY createdat DESC`;

    res.status(200).json({ message: "success", transactions });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: error.message });
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

const getIncomeExpense = async (req, res) => {
  try {
    const { userId } = req.params;

    const data =
      await sql`SELECT transaction_type, SUM(amount) as total FROM usertransaction WHERE user_id=${userId} GROUP BY transaction_type`;
    console.log("data", data);
    const [inc] = data.filter((el) => el.transaction_type === "INC");
    const [exp] = data.filter((el) => el.transaction_type === "EXP");
    res.status(201).json({
      message: "success",
      totalIncome: inc.total,
      totalExpense: exp.total,
    });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: error.message });
  }
};
const getChartData = async (req, res) => {
  console.log("KKKK");
  try {
    // const { userId } = req.params;
    console.log("getchartdata");
    const doughnutChart = await sql`
      SELECT 
        ct.name as category_name, 
        SUM(amount) as total 
      FROM usertransaction tr 
      INNER JOIN 
        usercategory ct ON tr.category_id=ct.id
      GROUP BY category_name;`;

    const barChart = await sql`
    SELECT
       EXTRACT(MONTH FROM updatedat) AS month,
       TO_CHAR(updatedat, 'Month') AS month_name,
     SUM(CASE WHEN transaction_type = 'INC' THEN amount ELSE 0 END) AS income,
        SUM(CASE WHEN transaction_type = 'EXP' THEN amount ELSE 0 END) AS expense
      FROM
          usertransaction
      GROUP BY
          month, month_name
      ORDER BY
          month;
      `;
    const labels = barChart.map((row) => row.month_name);
    const incomeData = barChart.map((row) => row.income);
    const expenseData = barChart.map((row) => row.expense);

    const dLabels = doughnutChart.map((e) => e.category_name);
    const data = doughnutChart.map((e) => e.total);

    res.status(201).json({
      message: "success",
      doughnutChart: { labels: dLabels, data },
      barChart: {
        labels,
        incomeData,
        expenseData,
      },
    });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTransaction,
  getAllTransaction,
  getIncomeExpense,
  getChartData,
};

const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
  getIncomeExpense,
  getChartData,
} = require("../controller/transactionController");

const router = Router();

router.route("/").post(createTransaction);
router.route("/incomeandexpense/:userId").get(getIncomeExpense);
router.route("/:userId").get(getAllTransaction);
router.route("/chartdata/:userId").get(getChartData);
// router.route("/transaction").post(transactionpost);
// router.route("/transaction/:transactionId").delete(transactiondelete);
// router.route("/transaction/:transactionId").put(transactionupdate);

module.exports = router;

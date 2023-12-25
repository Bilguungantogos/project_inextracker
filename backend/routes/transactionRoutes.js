const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
} = require("../controller/transactionController");

const router = Router();

router.route("/").post(createTransaction);
router.route("/:userId").get(getAllTransaction);
// router.route("/transaction").post(transactionpost);
// router.route("/transaction/:transactionId").delete(transactiondelete);
// router.route("/transaction/:transactionId").put(transactionupdate);

module.exports = router;

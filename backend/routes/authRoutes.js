const { Router } = require("express");
const {
  signup,
  signin,
  addcategory,
  transactionpost,
  transactiondelete,
  transactionupdate,
} = require("../controller/authController");

const router = Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/addcategory").post(addcategory);
router.route("/transaction").post(transactionpost);
router.route("/transaction/:transactionId").delete(transactiondelete);
router.route("/transaction/:transactionId").put(transactionupdate);

module.exports = router;

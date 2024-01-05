const { Router } = require("express");
const { upload } = require("../controller/imageController");
const { imageUpload } = require("../utils/upload");

const router = Router();

//http://localhost:8008/api/image/
router.route("/upload/:userId").post(imageUpload.single("image"), upload);

module.exports = router;

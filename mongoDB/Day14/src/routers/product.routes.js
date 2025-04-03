const express = require("express");
const router = express.Router();

const {
  productGet,
  productPost,
  sam
} = require("../controllers/product.controllers");

router.get("/", productGet);
router.post("/create/orderId", productPost);

router.post("/var", sam);
module.exports = router;

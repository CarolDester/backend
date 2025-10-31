const express = require("express");
const { verificarToken } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", verificarToken, (req, res) => {
  res.status(200).json([]);
});

module.exports = router;

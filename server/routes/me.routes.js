const { Router } = require("express");
const { check } = require("express-validator");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    msg: "Hello",
  });
});

module.exports = router;

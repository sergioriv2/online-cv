const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields.middlewares");

const { login } = require("../controllers/auth.controller");

const router = Router();

router.post(
  "/login",
  [
    check("username", "'username' field is required.")
      .notEmpty()
      .isString()
      .withMessage("'username' field must be a string."),
    check("password", "'password' field is required.")
      .notEmpty()
      .isString()
      .withMessage("'password' field must be a string."),
    validateFields,
  ],
  login
);

module.exports = router;

const { Router } = require("express");
const { check } = require("express-validator");

const {
  getAll,
  create,
  remove,
  update,
} = require("../controllers/sections.controller");
const { validateFields } = require("../middlewares/validateFields.middlewares");
const { validateJWT } = require("../middlewares/validateJWT");

const router = Router();

// Expected endpoints: GET ALL, POST, PUT, DELETE

router.get("/", getAll);

router.post(
  "/",
  [
    validateJWT,
    check("title.es", "'spanish title' field is required.")
      .notEmpty()
      .isString()
      .withMessage("'spanish title' must be a string."),
    check("title.en", "'english title' must be a string.")
      .isString()
      .optional(),
    check("description.es", "'spanish description' field is required.")
      .notEmpty()
      .isString()
      .withMessage("'spanish description' must be a string."),
    check("description.en", "'english description' field is required.")
      .notEmpty()
      .isString()
      .withMessage("'english description' must be a string."),
    validateFields,
  ],
  create
);

router.delete("/:id", [validateJWT, validateFields], remove);

router.put(
  "/:id",
  [
    validateJWT,
    check("title.es", "'spanish title' must be a string.")
      .isString()
      .optional(),
    check("title.en", "'english title' must be a string.")
      .isString()
      .optional(),
    check("description.es", "'spanish description' must be a string.")
      .isString()
      .optional(),
    check("description.en", "'english description' must be a string.")
      .isString()
      .optional(),
    validateFields,
  ],
  update
);

module.exports = router;

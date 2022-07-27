const { Router } = require("express");
const { check } = require("express-validator");

const { getInformation, update } = require("../controllers/me.controller");
const { validateFields } = require("../middlewares/validateFields.middlewares");
const { validateJWT } = require("../middlewares/validateJWT");

const router = Router();

// This endpoint is used to authenticate users and also to get my personal information
// Expected routes POST (Log-in maybe), GET, PUT

router.get("/", getInformation);

router.put(
  "/",
  [
    validateJWT,
    check("names.firstName", "'firstName' field must be a string.")
      .isString()
      .optional(),
    check("names.lastName", "'lastName' field must be a string.")
      .isString()
      .optional(),
    check("image", "'image' field must be an URL.").isURL().optional(),
    check("username", "'username' field must be a string.")
      .isString()
      .optional(),
    check("password", "'password' field must be a string.")
      .isString()
      .optional(),
    check("resume", "'resume' field must be a string.").isString().optional(),
    check(
      "academic_background",
      "'academic_background' field must be an array."
    )
      .isArray()
      .optional(),
    check(
      "academic_background.*.institution",
      "'institution at academic_background' field is required."
    )
      .isString()
      .withMessage(
        "'institution at academic_background' field must be an string."
      ),
    check(
      "academic_background.*.title",
      "'title at academic_background' field is required."
    )
      .isString()
      .withMessage("'title at academic_background' field must be an string."),
    validateFields,
  ],
  update
);

// router.post("/", );

module.exports = router;

const { Router } = require("express");
const { check } = require("express-validator");
const {
  getProjects,
  getProject,
  putProject,
  postProject,
  deleteProject,
} = require("../controllers/projects.controller");

const { validateFields } = require("../middlewares/validateFields.middlewares");

const router = Router();

// ===============================
// GET
// ===============================

// Get all projects
router.get("/", getProjects);

// ===============================
// PUT
// ==============================

router.put("/:projectId", putProject);

// ===============================
// POST
// ==============================

// Post new object
router.post(
  "/",
  [
    check("title.es", "'spanish title' field is required.")
      .notEmpty()
      .isString()
      .withMessage("'spanish title' field must be a string."),
    check("title.en", "'english title' must be a string.")
      .isString()
      .withMessage("'english title' field must be a string.")
      .optional(),
    check("description.es", "'spanish description' is required.")
      .notEmpty()
      .isString()
      .withMessage("'spanish description' field must be a string."),
    check("description.en", "'english description' is required.").notEmpty(),
    check("dates.start", "'started date' field is required.")
      .notEmpty()
      .isDate()
      .withMessage("'started date' field must be a date."),
    check("dates.end", "'finished date' field must be a date")
      .isDate()
      .optional(),
    check("links.repository", "'repository' field is required.")
      .notEmpty()
      .isString()
      .withMessage("'repository' field must be a string."),
    check("images.thumbnail", "'thumbnail'  field must be a string.")
      .isString()
      .optional(),
    check("images.original", "'original image' field is required.")
      .notEmpty()
      .isString()
      .withMessage("'original image' field must be a string."),
    check("links.deploy", "'deploy' field must be a string.").isString(),
    check("softwares", "'softwares' field is required.").notEmpty().isArray(),
    validateFields,
  ],
  postProject
);

// ===============================
// DELETE
// ==============================

router.delete("/:projectId", deleteProject);

module.exports = router;

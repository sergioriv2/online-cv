const { Router } = require("express");
const { check } = require("express-validator");
const {
  getProjects,
  getProject,
  putProject,
  postProject,
  deleteProject,
} = require("../controllers/projects.controllers");

const { validateFields } = require("../middlewares/validateFields.middlewares");

const router = Router();

// ===============================
// GET
// ===============================

// Get all projects
router.get("/", getProjects);

// Get specific project
router.get("/:projectId", getProject);

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
    check("title", "'title' field is required.").notEmpty(),
    check("date", "'date' field is required.").notEmpty(),
    check("repository", "'repository' field is required.").notEmpty(),
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

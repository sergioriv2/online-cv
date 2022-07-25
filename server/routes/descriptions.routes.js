const { Router } = require("express");

const router = Router();

const {
  postDescription,
  getDescription,
  putDescription,
} = require("../controllers/description.controllers");

router.post("/project/:projectId", postDescription);

router.get("/project/:projectId/lang/:lang", getDescription),
  router.put("/project/:projectId/lang/:lang", putDescription);

module.exports = router;

const { Router } = require("express");
const { check } = require("express-validator");

const {
  getAll,
  create,
  remove,
  update,
} = require("../controllers/sections.controller");

const router = Router();

// Expected endpoints: GET ALL, POST, PUT, DELETE

router.get("/", getAll);

router.post("/", create);

router.delete("/:id", remove);

router.put("/:id", update);

module.exports = router;

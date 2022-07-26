const { Router } = require("express");
const { check } = require("express-validator");

const { getInformation, update } = require("../controllers/me.controller");

const router = Router();

// This endpoint is used to authenticate users and also to get my personal information
// Expected routes POST (Log-in maybe), GET, PUT

router.get("/", getInformation);

router.put("/", update);

// router.post("/", );

module.exports = router;

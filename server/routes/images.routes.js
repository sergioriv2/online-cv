const { Router } = require("express");

const {
  deleteImage,
  getImages,
  getProjectImages,
  postImage,
} = require("../controllers/images.controller");

const router = Router();

router.get("/", getImages);

router.get("/project/:projectId", getProjectImages);

router.post("/project/:projectId", postImage);

router.delete("/:imageId", deleteImage);

module.exports = router;

const Image = require("../models/images.model");

const getImages = async (req, res, next) => {
  try {
    const { projectId } = req.params;

    const images = await Image.findOne({ project: projectId }).select("images");

    if (!images)
      return res.status(404).json({ msg: "Image not found", ok: false });

    return res.status(200).json({ results: images, ok: true });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

const postImage = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const { thumbnail, original } = req.body;

    const newImage = new Image({
      images: { thumbnail, original },
      project: projectId,
    });

    await newImage.save();

    return res.status(200).json({ results: newImage.images, ok: true });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

const getProjectImages = async (req, res, next) => {
  try {
    const { projectId } = req.params;

    const images = await Image.find({ project: projectId }).select("images");
    if (!images)
      return res.status(400).json({ msg: "Images not found", ok: false });

    return res.status(200).json({ results: images, ok: true });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

const deleteImage = async (req, res, next) => {
  try {
    const { imageId } = req.params;

    const image = await Image.findById(imageId);

    if (!image) res.status(404).json({ msg: "Image not found", ok: false });

    image.status = false;

    await image.save();
    res.status(200).json({ ok: true });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

module.exports = {
  deleteImage,
  getImages,
  getProjectImages,
  postImage,
};

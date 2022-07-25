const Description = require("../models/description.models");

const postDescription = async (req, res) => {
  try {
    const { description, lang } = req.body;
    const { projectId } = req.params;

    const newDesc = new Description({
      description,
      lang,
      project: projectId,
    });

    const desc = await newDesc.save();
    return res.status(200).json({ results: desc, ok: true });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

const getDescription = async (req, res) => {
  try {
    const { projectId, lang } = req.params;

    const desc = await Description.findOne({ project: projectId, lang }).select(
      "description"
    );

    if (!desc)
      return res.status(404).send({ msg: "Description not found", ok: false });

    return res.status(200).json({ results: desc, ok: true });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

const putDescription = async (req, res) => {
  try {
    const { description } = req.body;
    const { projectId, lang } = req.params;

    const desc = await Description.findOne({ project: projectId, lang });
    if (!desc)
      return res.status(404).send({ msg: "Description not found", ok: false });

    description ? (desc.description = description) : null;
    await desc.save();

    return res.status(200).json({ results: desc, ok: true });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

module.exports = {
  postDescription,
  getDescription,
  putDescription,
};

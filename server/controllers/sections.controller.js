const Section = require("../models/section.model");

const getAll = async (req, res) => {
  try {
    const results = await Section.find();

    return res.status.json({
      ok: true,
      results,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      ok: false,
      msg: "Internal Server Error",
    });
  }
};
const create = async (req, res) => {
  const { title, description } = req.body;

  try {
    const section = new Section({
      title,
      description,
    });

    const results = await section.save();

    return res.status(201).json({ results, ok: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      ok: false,
      msg: "Internal Server Error",
    });
  }
};
const update = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const section = await Section.findById(id);

    if (!section) return res.status(404).json({ ok: false, msg: "Not found." });

    section.title = title;
    section.description = description;

    await section.save();

    return res.status(200).json({ ok: true, results: section });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      ok: false,
      msg: "Internal Server Error",
    });
  }
};
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const section = await Section.findById(id);

    if (!section) return res.status(404).json({ ok: false, msg: "Not found." });

    section.status = false;

    await section.save();

    return res.status(200).json({ ok: true, msg: "Deleted successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      ok: false,
      msg: "Internal Server Error",
    });
  }
};

module.exports = {
  getAll,
  create,
  remove,
  update,
};

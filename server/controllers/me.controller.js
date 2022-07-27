const Me = require("../models/me.model");

const getInformation = async (req, res) => {
  try {
    const me = await Me.findOne({ username: "serivera" }).select(
      "names image resume academic_background"
    );

    return res.json({ ok: true, results: me });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      ok: false,
      msg: "Internal Server Error",
    });
  }
};

const update = async (req, res) => {
  const { names, image, password, resume, academic_background } = req.body;

  try {
    const me = await Me.findOne({ username: "serivera" });

    if (!me) return res.status(404).json({ ok: false, msg: "Not found." });

    names?.firstName ? (me.names.firstName = names?.firstName) : null;
    names?.lastName ? (me.names.lastName = names?.lastName) : null;

    image ? (me.images = image) : null;
    password ? (me.password = password) : null;
    resume ? (me.resume = resume) : null;
    academic_background ? (me.academic_background = academic_background) : null;

    await me.save();

    return res.json({ ok: true, results: me });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      ok: false,
      msg: "Internal Server Error",
    });
  }
};

module.exports = {
  getInformation,
  update,
};

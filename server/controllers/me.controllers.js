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
  const { fName, lName, image, password, resume, academic_background } =
    req.body;

  try {
    const me = await Me.findOne({ username: "serivera" });

    if (!me) return res.status(404).json({ ok: false, msg: "Not found." });

    me.names.firstName = fName;
    me.names.lastName = lName;

    me.image = image;
    me.password = password;
    me.resume = resume;
    me.academic_background = academic_background;

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

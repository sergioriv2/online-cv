const Me = require("../models/me.model");
const { generateJWT } = require("../helpers/generate-JWT");

const login = async (req, res) => {
  try {
    const { username: submitted_username, password: submitted_password } =
      req.body;

    const me = await Me.findOne({ username: submitted_username });

    if (!me) return res.status(404).json({ ok: false, msg: "Not found." });

    if (me.password !== submitted_password)
      return res.status(400).json({ ok: false, msg: "Bad Request" });

    console.log(me);

    const { password, username, ...payload } = me;

    const token = await generateJWT(payload);

    return res.status(200).json({ ok: true, results: { token } });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      ok: false,
      msg: "Internal Server Error",
    });
  }
};

module.exports = {
  login,
};

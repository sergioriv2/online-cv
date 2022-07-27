const jwt = require("jsonwebtoken");
const Me = require("../models/me.model");

const validateJWT = async (req, res, next) => {
  // API key required in request header
  const apiKey = req.header("X-Api-key");

  if (!apiKey) {
    return res.status(401).json({
      msg: "An API key is required in the request header.",
      ok: false,
    });
  }

  // If an API Key is provided, the validation is done
  try {
    const { user } = jwt.verify(apiKey, process.env.JWT_SECRET);
    const { uid } = user;

    const userData = await Me.findById(uid);

    // Verify if the user exists already

    if (!userData) {
      return res.status(401).json({ msg: "Invalid API Key.", ok: false });
    }
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ msg: "Invalid API Key.", ok: false });
  }
};

module.exports = {
  validateJWT,
};

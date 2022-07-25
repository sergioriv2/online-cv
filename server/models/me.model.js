const { Schema, model } = require("mongoose");

const meSchema = Schema({
  // Profile Names
  names: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  // Profile Image Link
  image: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  // Profile Password
  password: {
    type: String,
    required: false,
  },
  // Resume path
  resume: {
    type: String,
    required: false,
  },
  // Academic background
  academic_background: [
    {
      required: false,
      institution: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      dates: {
        start: {
          type: Schema.Types.Date,
          required: true,
        },
        end: {
          type: Schema.Types.Date,
          required: true,
        },
      },
    },
  ],
});

meSchema.methods.toJSON = function () {
  const { __v, _id, ...me } = this.toObject();
  me.uid = _id;
  return me;
};

module.exports = model("me", meSchema);

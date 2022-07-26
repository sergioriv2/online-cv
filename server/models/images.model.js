const { Schema, model } = require("mongoose");

const projectImageSchema = Schema({
  images: {
    thumbnail: {
      type: String,
      required: false,
    },
    original: {
      type: String,
      required: true,
    },
  },

  project: {
    type: Schema.Types.ObjectId,
    ref: "projects",
    required: true,
  },
});

projectImageSchema.methods.toJSON = function () {
  const { __v, _id, ...image } = this.toObject();
  image.uid = _id;
  return image;
};

module.exports = model("project_image", projectImageSchema);

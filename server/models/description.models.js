const { Schema, model } = require("mongoose");

const descriptionSchema = Schema({
  description: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "projects",
    required: true,
  },
});

descriptionSchema.methods.toJSON = function () {
  const { __v, _id, ...desc } = this.toObject();
  desc.uid = _id;
  return desc;
};

module.exports = model("project_description", descriptionSchema);

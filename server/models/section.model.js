const { Schema, model } = require("mongoose");

const sectionSchema = Schema({
  // Section Title
  title: {
    es: {
      type: String,
      required: true,
    },
    en: {
      type: String,
      required: false,
    },
  },
  // Section descriptions
  description: {
    es: {
      type: String,
      required: true,
    },
    en: {
      type: String,
      required: true,
    },
  },
  // Section status (Should display or not?)
  status: {
    type: Boolean,
    required: false,
    default: true,
  },
});

sectionSchema.methods.toJSON = function () {
  const { __v, _id, ...section } = this.toObject();
  section.uid = _id;
  return section;
};

module.exports = model("section", sectionSchema);

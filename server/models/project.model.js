const { Schema, model } = require("mongoose");

const projectSchema = Schema({
  // Project Title
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
  // Project descriptions
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
  // Project status (Should display or not?)
  status: {
    type: Boolean,
    required: false,
    default: true,
  },
  // Important dates
  dates: {
    start: {
      type: Schema.Types.Date,
      required: true,
    },
    end: {
      type: Schema.Types.Date,
      required: false,
    },
  },
  // Project links
  links: {
    deploy: {
      type: String,
      required: false,
    },
    repository: {
      type: String,
      required: false,
    },
  },
  // Project softwares
  softwares: [
    {
      type: String,
    },
  ],
  images: [
    {
      thumbnail: {
        type: String,
        required: false,
      },
      original: {
        type: String,
        required: true,
      },
    },
  ],
});

projectSchema.methods.toJSON = function () {
  const { __v, _id, ...project } = this.toObject();
  project.uid = _id;
  return project;
};

module.exports = model("project", projectSchema);

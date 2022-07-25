const { Schema, model } = require("mongoose");

const projectSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: false,
    default: true,
  },
  date: {
    start: {
      type: Schema.Types.Date,
      required: true,
    },
    end: {
      type: Schema.Types.Date,
      required: true,
    },
  },
  deploy: {
    type: String,
    required: false,
  },
  repository: {
    type: String,
    required: true,
  },
  softwares: {
    type: Array,
    required: true,
  },
});

projectSchema.methods.toJSON = function () {
  const { __v, _id, ...project } = this.toObject();
  project.uid = _id;
  return project;
};

module.exports = model("project", projectSchema);

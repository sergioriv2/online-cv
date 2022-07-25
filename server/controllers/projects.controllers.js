const Project = require("../models/project.models");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().select(
      "date title description softwares repository unfinished"
    );
    return res.status(200).json({ results: projects, ok: true });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

const getProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    const project = await Project.findById(projectId);
    if (!project)
      return res.status(400).json({ msg: "Project not found.", ok: false });

    return res.status(200).json({ results: project, ok: true });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

const postProject = async (req, res, next) => {
  try {
    const { lang, title, date, description, repository, softwares } = req.body;
    const newProject = new Project({
      lang,
      title,
      date,
      description,
      repository,
      softwares,
    });

    const project = await newProject.save();
    return res.status(200).json({ results: project, ok: true });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

const putProject = async (req, res, next) => {
  try {
    const { projectId } = req.params;

    const { date, description, repository, title } = req.body;

    const project = await Project.findById(projectId);

    if (!project)
      return res.status(404).send({ msg: "Project not found", ok: false });

    date ? (project.date = date) : null;
    description ? (project.description = description) : null;
    repository ? (project.repository = repository) : null;
    title ? (project.title = title) : null;

    await project.save();

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const { projectId } = req.params;

    const project = await Project.findById(projectId);

    if (!project)
      return res.status(400).json({ msg: "Project not found", ok: false });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

module.exports = {
  getProject,
  getProjects,
  postProject,
  putProject,
  deleteProject,
};

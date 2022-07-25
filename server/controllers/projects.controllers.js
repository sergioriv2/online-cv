const Project = require("../models/project.models");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().select(
      "dates title description softwares links"
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

const postProject = async (req, res) => {
  try {
    const { title, dates, description, links, softwares } = req.body;
    const newProject = new Project({
      title,
      dates,
      description,
      links,
      softwares,
    });

    const project = await newProject.save();
    return res.status(200).json({ results: project, ok: true });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

const putProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    const { dates, description, links, title } = req.body;

    const project = await Project.findById(projectId);

    if (!project)
      return res.status(404).send({ msg: "Project not found", ok: false });

    project.dates = dates;
    project.description = description;
    project.links = links;
    project.title = title;

    await project.save();

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ msg: "Internal Server Error", ok: false });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    const project = await Project.findById(projectId);

    if (!project)
      return res.status(400).json({ msg: "Project not found", ok: false });

    project.status = false;

    await project.save();

    return res
      .status(200)
      .json({ ok: true, msg: "Project deleted successfully" });
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

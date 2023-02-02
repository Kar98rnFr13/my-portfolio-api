const Work = require("../models/my_work");
const { StatusCodes } = require("http-status-codes");
const getAllWork = async (req, res) => {
  const AllWorkDone = await Work.find({});
  return res.status(StatusCodes.OK).json({ AllWorkDone });
};

const getSignleTask = async (req, res) => {
  const { id } = req.params;
  const task = await Work.findOne({ _id: id });
  console.log(task);
  return res.status(StatusCodes.OK).json({ task });
};

// create task should come if i am able to log in
const createTasks = async (req, res) => {
  const tasks = await Work.create(req.body);
  return res.status(StatusCodes.OK).json({ tasks });
};
const editTasks = async (req, res) => {
  const { id } = req.params;
  const task = await Work.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  return res.status(StatusCodes.OK).json({ task });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Work.findByIdAndRemove({ _id: id });

  return res.status(StatusCodes.OK).json({ task });
};
module.exports = {
  getAllWork,
  getSignleTask,
  createTasks,
  editTasks,
  deleteTask,
};

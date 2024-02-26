const Task = require("../models/task.model.js");
module.exports.getTasks = async (req, res) => {
  try {
    // const tasks = await Task.find({ user: req.user.id }).populate("user");
    const tasks = await Task.find();
    res.status(200);
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.createTask = async (req, res) => {
  try {
    // const { title, description, date } = req.body;
    // const newTask = new Task({
    //   title,
    //   description,
    //   date,
    //   user: req.user.id,
    // });
    // await newTask.save();
    // res.json(newTask);
    const Tasks = await Task.create(req.body);
    res.status(201); //201 significa creado
    res.json(Tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    // const deletedTask = await Task.findByIdAndDelete(req.params.id);
    // if (!deletedTask)
    //   return res.status(404).json({ message: "Task not found" });

    // return res.sendStatus(204);

    const deletedTask = await Task.deleteOne({
      _id: req.params.id,
    });
    res.status(200);
    res.json(deletedTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.updateTask = async (req, res) => {
  try {
    // const { title, description, date } = req.body;
    // const taskUpdated = await Task.findOneAndUpdate(
    //   { _id: req.params.id },
    //   { title, description, date },
    //   { new: true }
    // );
    // return res.json(taskUpdated);
    const taskUpdated = await Task.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true } //runvalidators lo que hace es que vuelve a revalidar
    );
    res.status(201);
    res.json(taskUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.getTask = async (req, res) => {
  try {
    // const task = await Task.findById(req.params.id);
    // if (!task) return res.status(404).json({ message: "Task not found" });
    // return res.json(task);
    const task = await Task.findOne({ _id: req.params.id });
    res.status(200);
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

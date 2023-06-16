import Task from '../models/task.model.js';
import { createAccessToken } from '../libs/jwt.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
    }).populate('user', 'username');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate(
      'user',
      'username'
    );
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    const taskSaved = await newTask.save();
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const taskUpdated = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!taskUpdated)
      return res.status(404).json({ message: 'Task not found' });

    res.json(taskUpdated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const taskDeleted = await Task.findByIdAndDelete(req.params.id);

    if (!taskDeleted)
      return res.status(404).json({ message: 'Task not found' });

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

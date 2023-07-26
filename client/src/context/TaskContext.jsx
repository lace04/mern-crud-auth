import { createContext, useContext, useState, useEffect } from 'react';

import {
  getTasksRequest,
  getTaskRequest,
  createTaskRequest,
  updateTaskRequest,
  deleteTaskRequest,
} from '../api/tasks';

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTask must be used within TaskProvider');
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = async (task) => {
    try {
      await createTaskRequest(task);
    } catch (error) {
      console.log(error);
    }
  };

  const getTasks = async () => {
    try {
      const tasks = await getTasksRequest();
      setTasks(tasks.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, task) => {
    try {
      await updateTaskRequest(id, task);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        getTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

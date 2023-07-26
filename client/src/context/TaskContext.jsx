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
      const res = await createTaskRequest(task);
      console.log(res.data);
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

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

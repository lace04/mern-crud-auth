import React, { useEffect } from 'react';
import { useTask } from '../context/TaskContext';

function TasksPage() {
  const { getTasks, tasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  if (!tasks) return <div>Loading...</div>;
  if (tasks.length === 0) return <div>No tasks</div>;

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id} className=''>
          <div className=''>{task.title}</div>
          <div className=''>{task.description}</div>
        </div>
      ))}
    </div>
  );
}

export default TasksPage;

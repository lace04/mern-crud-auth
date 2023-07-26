import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GrAdd } from 'react-icons/gr';
import { useTask } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

function TasksPage() {
  const { getTasks, tasks } = useTask();
  const style = { color: 'white' };

  useEffect(() => {
    getTasks();
  }, []);

  if (!tasks) return <div>Loading...</div>;
  if (tasks.length === 0)
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-center text-6xl font-bold'>Not Taskss</h1>{' '}
        <Link to='/add-task'>
          <button className='mt-4 flex justify-center items-center bg-emerald-400 hover:bg-emerald-500 px-2 py-1 rounded-md transition duration-300 gap-x-2'>
            <GrAdd size={18}/>Add a new Task
          </button>
        </Link>
      </div>
    );

  return (
    <div className='container mx-auto px-5'>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;

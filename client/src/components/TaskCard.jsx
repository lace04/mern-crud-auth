import React from 'react';
import { Link } from 'react-router-dom';
import { useTask } from '../context/TaskContext';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTask();
  return (
    <div className='bg-zinc-800 m-4 p-2 rounded-md max-w-md w-full'>
      <header className='flex justify-between'>
        <h1 className='text-2xl uppercase font-semibold'>{task.title}</h1>
        <div className='flex gap-x-2 items-center'>
          <button>
            <Link to={`/tasks/${task._id}`}>
              <FiEdit
                size={20}
                className='text-emerald-400 hover:text-green-600 transition duration-300'
              />
            </Link>
          </button>
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this task?'))
                deleteTask(task._id);
            }}
          >
            <MdDeleteForever
              size={24}
              className='text-red-500 hover:text-red-600 transition duration-300'
            />
          </button>
        </div>
      </header>
      <p className='font-extralight text-slate-400'>{task.description}</p>

      <p className='font-extralight text-white'>
        Deadline: {dayjs.utc(task.date).format('DD/MM/YYYY')}
      </p>

      <p className='font-extralight text-orange-200 text-xs'>
        Created: {new Date(task.createdAt).toLocaleString()}
      </p>
      <p className='font-extralight text-orange-300 text-xs'>
        Updated: {new Date(task.updatedAt).toLocaleString()}
      </p>
    </div>
  );
}

export default TaskCard;

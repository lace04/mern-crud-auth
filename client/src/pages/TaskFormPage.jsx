import React from 'react';
import { useForm } from 'react-hook-form';
import { useTask } from '../context/TaskContext';

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTask();

  const onSubmit = handleSubmit((data) => createTask(data));

  return (
    <div>
      <h1 className='text-3xl text-center font-bold mt-5'>Tasks</h1>
      <form
        onSubmit={onSubmit}
        className='flex flex-col w-1/3 mx-auto mt-10 p-5 bg-zinc-700 rounded-lg shadow-lg'
      >
        <input
          type='text'
          placeholder='Write a title'
          className='mb-3 p-2 bg-zinc-800 rounded-lg shadow-lg'
          {...register('title')}
          autoFocus
        />
        <textarea
          rows={3}
          placeholder='Write a description'
          className='mb-3 p-2 bg-zinc-800 rounded-lg shadow-lg'
          {...register('description')}
        />
        <button className='bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg p-2 transition'>
          <span className='text-zinc-50'>Save Task</span>
        </button>
      </form>
    </div>
  );
}

export default TaskFormPage;

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useTask } from '../context/TaskContext';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const { createTask, getTask, updateTask } = useTask();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);

  const title = watch('title');
  const description = watch('description');
  const date = watch('date');

  useEffect(() => {
    async function loadTask() {
      if (id) {
        const task = await getTask(id);
        setValue('title', task.title);
        setValue('description', task.description);
        setValue('date', dayjs.utc(task.date).format('YYYY-MM-DD'));
      }
    }
    loadTask();
  }, []);

  useEffect(() => {
    if (title && description && date) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [title, description, date]);

  const onSubmit = handleSubmit((data) => {
    const dateValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    if (id) {
      updateTask(id, dateValid);
    } else {
      createTask(dateValid);
    }
    navigate('/tasks');
  });

  return (
    <div>
      <h1 className='text-3xl text-center font-bold mt-5'>Tasks</h1>
      <form
        onSubmit={onSubmit}
        className='flex flex-col w-1/3 mx-auto mt-10 p-5 bg-zinc-700 rounded-lg shadow-lg'
      >
        <label htmlFor='title'>Title: </label>
        <input
          type='text'
          placeholder='Write a title'
          className='mb-3 p-2 bg-zinc-800 rounded-lg shadow-lg'
          {...register('title')}
          autoFocus
        />
        <label htmlFor='description'>Description: </label>
        <textarea
          rows={3}
          placeholder='Write a description'
          className='mb-3 p-2 bg-zinc-800 rounded-lg shadow-lg'
          {...register('description')}
        />
        <label htmlFor='date'>Date</label>
        <input
          type='date'
          {...register('date')}
          className='mb-3 p-2 bg-zinc-800 rounded-lg shadow-lg'
        />
        <button
          disabled={isDisabled}
          className={`bg-zinc-600 hover:bg-orange-600 rounded-lg shadow-lg p-2 transition duration-500 ${
            isDisabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <span className='text-zinc-50'>
            {id ? 'Update Task' : 'Save Task'}
          </span>
        </button>
      </form>
    </div>
  );
}

export default TaskFormPage;

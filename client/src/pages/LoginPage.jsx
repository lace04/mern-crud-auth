import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks');
    }
  }, [isAuthenticated]);

  return (
    <div className=''>
      <h1 className='text-3xl text-center font-bold mt-5'>Login</h1>
      {signinErrors.map((error, i) => (
        <div key={i} className='bg-red-500 p-2 text-white w-1/2 m-auto my-2'>
          {error}
        </div>
      ))}
      <form
        onSubmit={onSubmit}
        className='flex flex-col w-1/2 mx-auto my-4 gap-y-4 bg-zinc-800 p-4 rounded-md'
      >
        <input
          type='email'
          {...register('email', { required: true })}
          className='bg-zinc-700 rounded-md p-2'
          placeholder='Email'
        />
        {errors.email && (
          <span className='text-red-500 text-xs'>This email is required</span>
        )}
        <input
          type='password'
          {...register('password', { required: true })}
          className='bg-zinc-700 rounded-md p-2'
          placeholder='******'
        />
        {errors.password && (
          <span className='text-red-500 text-xs'>
            This password is required
          </span>
        )}
        <button
          type='submit'
          className='bg-emerald-600 hover:bg-emerald-700 rounded-md p-2 transition'
        >
          Login
        </button>
        <p className='text-center flex justify-between'>
          Don't have an account?
          <Link to='/register' className='text-emerald-500 hover:text-emerald-600'>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;

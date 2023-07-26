import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  //redirección si el usuario está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks');
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
  });
  return (
    <div className=''>
      <h1 className='text-3xl text-center font-bold mt-5'>Register</h1>
      {RegisterErrors.map((error, i) => (
        <div key={i} className='bg-red-500 p-2 text-white w-1/2 m-auto'>
          {error}
        </div>
      ))}
      <form
        onSubmit={onSubmit}
        className='flex flex-col w-1/2 mx-auto my-4 gap-y-4 bg-zinc-800 p-4 rounded-md'
      >
        <input
          type='text'
          {...register('username', { required: true })}
          className='bg-zinc-700 rounded-md p-2'
          placeholder='Username'
        />
        {errors.username && (
          <span className='text-red-500 text-xs'>
            This username is required
          </span>
        )}
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
          Register
        </button>
        <p className='text-center flex justify-between'>
          Already have an account?
          <Link to='/login' className='text-emerald-500 hover:text-emerald-600'>
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;

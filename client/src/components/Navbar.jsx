import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <nav className='bg-zinc-700 flex justify-between py-5 px-10'>
      <Link to={isAuthenticated ? '/tasks' : '/'}>
        <h1 className='text-2xl font-bold'>Tasks Manager</h1>
      </Link>
      <ul className='flex gap-x-8'>
        {isAuthenticated ? (
          <>
            <h1 className='font-extralight text-left mr-10'>
              Welcome {user.username.toUpperCase()}
            </h1>
            <li className='hover:border-b-[1px] border-orange-500'>
              <Link to='/tasks'>Tasks</Link>
            </li>
            <li className='hover:border-b-[1px] border-orange-500'>
              <Link to='/add-task'>Add Task</Link>
            </li>
            <li className='hover:border-b-[1px] border-orange-500'>
              <Link to='/profile'>Profile</Link>
            </li>
            <li className='bg-zinc-600 hover:border-b-2 border-red-500 rounded-md px-2 hover:bg-orange-500 transition duration-700'>
              <Link to='/' onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className='bg-emerald-400 hover:bg-emerald-500 px-2 py-1 rounded-sm transition duration-300'>
              <Link to='/login'>Login</Link>
            </li>
            <li className='bg-emerald-400 hover:bg-emerald-500 px-2 py-1 rounded-sm transition duration-300'>
              <Link to='/register'>Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

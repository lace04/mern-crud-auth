import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login', { replace: true });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex items-center justify-center h-screen'>
      <h1 className='text-center text-6xl font-bold'>404 | </h1>{' '}
      <p className='ml-4'> Not Found page</p>
    </div>
  );
}

export default NotFoundPage;

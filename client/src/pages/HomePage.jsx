import React from 'react';

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-[calc(100vh-80px)]'>
      <h1
      className='text-5xl font-bold text-center text-white mb-4'
      >Task App MERN</h1>
      <p className='lg:w-2/5 w-4/5'>
        A fullstack application built with{' '}
        <span className='text-green-500'>Node.js</span>,{' '}
        <span className='text-blue-500'>React</span>, and{' '}
        <span className='text-green-500'>MongoDB</span> integrates a login
        system and CRUD (Create, Read, Update, Delete) functionality. The
        application uses <span className='text-red-500'>JWT</span> (JSON Web
        Token) stored in cookies for authentication and authorization, allowing
        users to securely access protected paths and resources. Data validation
        is handled using <span className='text-blue-500'>Zod</span>, a{' '}
        <span className='text-yellow-500'>JavaScript</span> library for parsing
        and validating data. The front-end using Vite, a fast and lightweight
        tool for building modern web projects, along with{' '}
        <span className='text-blue-500'>React</span> and{' '}
        <span className='text-yellow-500'>JavaScript</span>. The application
        also makes use of the Context API to manage global state and share data
        between components. Protected routes are implemented to ensure that only
        authenticated users can access certain parts of the application. This
        combination of technologies provides a robust and scalable solution for
        building complete applications.
      </p>

      <div className='grid grid-flow-col items-center justify-center gap-x-4 bg-white p-6 rounded-md mt-4 lg:w-2/5 w-4/5'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
          alt='Node.js logo'
          width='70'
        />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          alt='React logo'
          width='70'
        />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg'
          alt='MongoDB logo'
          width='70'
        />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
          alt='JavaScript logo'
          width='70'
        />
        <img src='https://zod.dev/logo.svg' alt='Zod logo' width='70' />
        <img src='https://jwt.io/img/pic_logo.svg' alt='Zod logo' width='70' />
      </div>
    </div>
  );
}

export default HomePage;

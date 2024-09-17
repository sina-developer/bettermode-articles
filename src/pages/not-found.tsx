import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='w-full flex items-center justify-center grow'>
      <div className='text-center'>
        <p className='text-5xl font-semibold text-red-600'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-gray-100'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            to={'/'}
            className='rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm   '
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

import { useEffect } from 'react';
import { useAuth } from '../providers/auth-provider';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <div className='w-full flex items-center justify-center grow'>
      <div className='flex flex-col bg-gray-900 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md'>
        <div className='font-medium self-center text-xl sm:text-2xl uppercase text-white'>
          Login To Your Account
        </div>
        <button
          className='relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200'
          onClick={() => {
            login(import.meta.env.VITE_API_TOKEN);
          }}
          data-id='login-btn'
        >
          <span className='absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500'>
            <i className='fab fa-facebook-f'></i>
          </span>
          <span>Just with a click!</span>
        </button>
      </div>
    </div>
  );
}

export default Login;

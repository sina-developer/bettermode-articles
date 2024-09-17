import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/auth-provider';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const LogoutBtn = isAuthenticated && (
    <div
      onClick={logout}
      className='text-sm font-semibold leading-6 text-white cursor-pointer hover:text-gray-300'
    >
      Log out
    </div>
  );
  return (
    <header className='bg-gray-800'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <div className='flex'>
          <Link to='/' className='-m-1.5 p-1.5'>
            <img className='h-8 w-auto' src='/logo.png' alt='' />
          </Link>
        </div>

        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300'
          >
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex'>{LogoutBtn}</div>
      </nav>

      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-50/10'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='-m-1.5 p-1.5'>
              <img className='h-8 w-auto' src='/logo.png' alt='' />
            </Link>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-300'
            >
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-50/10'>
              <div className='py-6'>{LogoutBtn}</div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

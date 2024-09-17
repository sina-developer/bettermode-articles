import React from 'react';
import Skeleton from 'react-loading-skeleton';

function Placeholder() {
  return (
    <div className='flex  flex-col items-center justify-center'>
      <Skeleton circle width={100} height={100} className='mb-4' />

      <Skeleton width={200} className='mb-2' />
      <Skeleton width={200} />
    </div>
  );
}

export default Placeholder;

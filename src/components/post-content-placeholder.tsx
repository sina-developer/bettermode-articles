import React from 'react';
import Skeleton from 'react-loading-skeleton';

function PostContentPlaceholder() {
  return (
    <div>
      <Skeleton height={30} width={100} className='mb-4' />
      <Skeleton height={40} className='mb-4' />
      <Skeleton count={9} />
    </div>
  );
}

export default PostContentPlaceholder;

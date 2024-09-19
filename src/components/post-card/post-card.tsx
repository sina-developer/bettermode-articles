import React from 'react';
import { Post } from '../../types/global';
import Image from '../common/image';
import HeartIcon from '../common/icons/Heart.svg';
import { Link } from 'react-router-dom';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} data-id="post-card">
      <div className='border text-white overflow-hidden rounded border-card flex flex-col text-content-subdued transition duration-200 justify-between bg-surface shadow-card sm:rounded-card cursor-pointer hover:shadow-card-hovered h-full'>
        <div className='overflow-hidden -mx-[1px] empty:hidden sm:rounded-t-card -mt-[1px]'>
          <div className='w-full relative aspect-video'>
            <Image fileds={post.fields} />
          </div>
        </div>
        <div className='flex-1 px-4 py-4 sm:p-4 flex flex-col gap-4'>
          <div className='flex-1'>
            <div className='flex flex-wrap items-center gap-4'>
              <div className='cursor-pointer rounded-base transition duration-200 focus:outline-none focus-visible:ring basis-full break-words min-w-0 inline-block'>
                <h2 className='font-medium text-lg text-white line-clamp-3'>
                  {post.title}
                </h2>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap items-center gap-4'>
            <div className='empty:hidden text-xs min-w-0 basis-full'>
              <article
                className='prose break-words line-clamp-5'
                dangerouslySetInnerHTML={{ __html: post.shortContent }}
              />
            </div>
            <div className='flex space-s-2   items-center empty:hidden text-sm'>
              <span className='flex items-center gap-2'>
                <HeartIcon />
                {post.reactionsCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;

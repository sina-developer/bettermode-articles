import { useQuery } from '@apollo/client';
import { GetPosts } from '../../graphql/queries';
import Post from '../../components/post-card/post-card';
import { ArticleListResponse } from '../../types/global';
import { useState } from 'react';

function Articles() {
  const [after, setAfter] = useState(null);
  const {
    //  error, loading,
    data,
    fetchMore,
  } = useQuery<ArticleListResponse>(GetPosts, {
    variables: {
      limit: 6,
      spaceIds: ['NehVcx1gqoMI'],
      postTypeIds: ['NJEFQy6d8NiNdQ6'],
      orderByString: 'publishedAt',
      reverse: true,
      filterBy: [],
      after: null,
    },
  });

  const loadMore = () => {
    fetchMore({
      variables: { after: data?.posts.pageInfo.endCursor },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;
        return {
          posts: {
            ...fetchMoreResult.posts,
            nodes: [...prevResult.posts.nodes, ...fetchMoreResult.posts.nodes],
          },
        };
      },
    });
  };

  return (
    <div className='bg-white dark:bg-gray-900 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 flex  flex-col'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
            All articles
          </h2>
        </div>
        <div className='mx-auto my-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {data?.posts.nodes.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        {data?.posts.pageInfo.hasNextPage && (
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ms-auto'
            onClick={loadMore}
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default Articles;

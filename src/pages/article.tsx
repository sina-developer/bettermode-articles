import { useNavigate, useParams } from 'react-router-dom';
import { GetPost } from '../graphql/queries';
import { useMutation, useQuery } from '@apollo/client';
import {
  AddReactionResponse,
  AddReactionVariables,
  PostResponse,
  RemoveReactionResponse,
  RemoveReactionVariables,
} from '../types/global';
import Image from '../components/common/image';
import { getCustomFieldValue } from '../utils/custom-field-handler';
import HeartIcon from '../components/common/icons/Heart.svg';
import BackIcon from '../components/common/icons/Back.svg';
import { ADD_REACTION, REMOVE_REACTION } from '../graphql/mutations';
import Skeleton from 'react-loading-skeleton';
import PostContentPlaceholder from '../components/post-content-placeholder';
import useScrollToTop from '../hooks/use-scroll-top';
import { useEffect } from 'react';

function Article() {
  useScrollToTop();
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    loading: loadingPost,
    data: postData,
    refetch: refetchPost,
    error,
  } = useQuery<PostResponse>(GetPost, {
    variables: {
      id,
    },
  });

  useEffect(() => {
    if (error && error.graphQLErrors[0]?.extensions?.status == 404) {
      navigate('/error');
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [error]);

  const [addReaction, { loading: addReactionLoading }] = useMutation<
    AddReactionResponse,
    AddReactionVariables
  >(ADD_REACTION, {
    onCompleted: refetchPost,
  });

  const [removeReaction, { loading: removeReactionLoading }] = useMutation<
    RemoveReactionResponse,
    RemoveReactionVariables
  >(REMOVE_REACTION, {
    onCompleted: refetchPost,
  });

  const submitLike = async () => {
    if (postData?.post.reactions.filter((k) => k.reacted).length) {
      await removeReaction({
        variables: {
          postId: postData?.post.id || '',
          reaction: 'heart',
        },
      });
    } else {
      await addReaction({
        variables: {
          postId: postData?.post.id || '',
          input: {
            reaction: 'heart',
            overrideSingleChoiceReactions: false,
          },
        },
      });
    }
  };

  return (
    <div
      className=' px-4 py-8 max-w-5xl my-20 min-w-full w-100'
      data-id='article-page'
    >
      <div className='bg-gray-800 shadow-2xl rounded-lg  overflow-hidden mb-6'>
        <div className='sm:rounded-t-card'>
          <div className='w-full relative aspect-video'>
            {loadingPost ? (
              <Skeleton width='100%' height={'100%'} />
            ) : (
              <Image fileds={postData?.post.fields || []} />
            )}
          </div>
        </div>
        <div className='px-4 py-2 mt-2'>
          {loadingPost ? (
            <PostContentPlaceholder />
          ) : (
            <>
              <div className='flex items-center justify-between mb-4'>
                <div
                  className='flex items-center gap-2 cursor-pointer'
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  <BackIcon /> <span>Articles</span>
                </div>
                <button
                  className='flex items-center justify-between mt-2 cursor-pointer'
                  onClick={submitLike}
                  disabled={addReactionLoading || removeReactionLoading}
                  data-id='heart-btn'
                >
                  <span className='flex items-center gap-2'>
                    <HeartIcon />
                    {postData?.post.reactionsCount}
                  </span>
                </button>
              </div>
              <h2 className='font-bold text-3xl text-white'>
                {postData?.post.title}
              </h2>

              <article
                className='prose break-words '
                dangerouslySetInnerHTML={{
                  __html:
                    getCustomFieldValue(
                      postData?.post.fields || [],
                      'content'
                    ) || '',
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Article;

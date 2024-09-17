import { useNavigate, useParams } from 'react-router-dom';
import { GetPost } from '../../graphql/queries';
import { useMutation, useQuery } from '@apollo/client';
import {
  AddReactionResponse,
  AddReactionVariables,
  PostResponse,
  RemoveReactionResponse,
  RemoveReactionVariables,
} from '../../types/global';
import Image from '../../components/common/image';
import { getCustomFieldValue } from '../../utils/custom-field-handler';
import HeartIcon from '../../components/common/icons/Heart.svg';
import BackIcon from '../../components/common/icons/Back.svg';
import { ADD_REACTION, REMOVE_REACTION } from '../../graphql/mutations';
import Skeleton from 'react-loading-skeleton';
import PostContentPlaceholder from '../../components/post-content-placeholder';
import useScrollToTop from '../../hooks/use-scroll-top';

function Article() {
  useScrollToTop();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    loading: loadingPost,
    data: postData,
    refetch: refetchPost,
  } = useQuery<PostResponse>(GetPost, {
    variables: {
      id,
    },
  });

  const [addReaction] = useMutation<AddReactionResponse, AddReactionVariables>(
    ADD_REACTION,
    {
      onCompleted: () => {
        refetchPost();
      },
    }
  );

  const [removeReaction] = useMutation<
    RemoveReactionResponse,
    RemoveReactionVariables
  >(REMOVE_REACTION, {
    onCompleted: () => {
      refetchPost();
    },
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
    <div className=' px-4 py-8 max-w-5xl my-20 min-w-full w-100'>
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
              <div
                className='flex items-center gap-2 my-4 cursor-pointer'
                onClick={() => {
                  navigate(-1);
                }}
              >
                <BackIcon /> <span>Articles</span>
              </div>
              <div className='flex justify-between align-center mb-4'>
                <h2 className='font-bold text-3xl text-white'>
                  {postData?.post.title}
                </h2>
                <div
                  className='flex items-center justify-between mt-2 cursor-pointer'
                  onClick={submitLike}
                >
                  <span className='flex items-center gap-2'>
                    <HeartIcon />
                    {postData?.post.reactionsCount}
                  </span>
                </div>
              </div>

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

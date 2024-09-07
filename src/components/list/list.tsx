import { useQuery, gql } from '@apollo/client';
import { GetPosts } from '../../graphql/queries';
import { useEffect } from 'react';

function List() {
  const { error, loading, data } = useQuery(GetPosts as any, {
    variables: {
      limit: 6,
      spaceIds: ['NehVcx1gqoMI'],
      postTypeIds: ['NJEFQy6d8NiNdQ6'],
      orderByString: 'publishedAt',
      reverse: true,
      filterBy: [],
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div></div>;
}

export default List;

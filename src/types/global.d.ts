export interface ArticleListResponse {
  posts: PaginatedPost;
}

export interface PostResponse {
  post: Post;
}

export interface PaginatedPost {
  totalCount: number;
  pageInfo: PageInfo;
  nodes: Post[];
}

export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
  __typename: string;
}

export interface Post {
  id: string;
  slug: string;
  fields: CustomField[];
  subscribersCount: number;
  reactionsCount: number;
  reactions: Reaction[];
  shortContent: string;
  createdAt: string;
  publishedAt: string;
  title: string;
  description: string;
  textContent: string;
}

export interface CustomField {
  key: string;
  value: string;
  relationEntities: RelationEntities | null;
  __typename: string;
}

export interface AddReactionInput {
  reaction: string;
  overrideSingleChoiceReactions: boolean;
}

export interface AddReactionVariables {
  postId: string;
  input: AddReactionInput;
}

export interface AddReactionResponse {
  addReaction: {
    status: string;
  };
}

export interface Reaction {
  count: number;
  reacted: boolean;
  reaction: string;
}

export interface RemoveReactionResponse {
  removeReaction: {
    status: string;
  };
}

export interface RemoveReactionVariables {
  postId: string;
  reaction: string;
}

export interface Route {
  path: string;
  component: ReactElement;
  isGaurded?: boolean;
}

export type RoutesConfig = Route[];

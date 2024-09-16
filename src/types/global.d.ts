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
  mappingFields: PostMappingField[];
  fields: CustomField[];
  subscribersCount: number;
  postTypeId: string;
  reactionsCount: number;
  reactions: Reaction[];
  hasMoreContent: boolean;
  isAnonymous: boolean;
  isHidden: boolean;
  shortContent: string;
  createdAt: string;
  publishedAt: string;
  ownerId: string;
  createdById: string;
  status: string;
  spaceId: string;
  imageIds: string[];
  pinnedInto: string[];
  repliesCount: number;
  totalRepliesCount: number;
  locked: boolean;
  repliedToIds: string[];
  repliedToId: string | null;
  title: string;
  description: string;
  textContent: string;
  thumbnail: string | null;
  embedIds: string[];
  mentionedMembers: string[];
  primaryReactionType: string;
  lastActivityAt: string;
  language: string;
  customSeoDetail: CustomSeoDetail;
  relativeUrl: string;
  url: string;
  owner: Owner;
  space: Space;
}

export interface PostMappingField {
  key: string;
  type: string;
  value: string;
  __typename: string;
}

export interface CustomField {
  key: string;
  value: string;
  relationEntities: RelationEntities | null;
  __typename: string;
}

export interface RelationEntities {
  medias?: Media[];
  members?: any[];
  posts?: any[];
  spaces?: any[];
  tags?: any[];
  __typename: string;
}

export interface Media {
  cropHeight: number | null;
  cropWidth: number | null;
  cropX: number;
  cropY: number;
  cropZoom: number;
  dominantColorHex: string;
  downloadUrl: string;
  dpi: number;
  height: number;
  id: string;
  name: string;
  url: string;
  urls: MediaUrls;
  width: number;
  __typename: string;
}

export interface MediaUrls {
  full: string;
  large: string;
  medium: string;
  small: string;
  thumb: string;
}

export interface CustomSeoDetail {
  description: string | null;
  noIndex: boolean | null;
  thumbnail: string | null;
  thumbnailId: string | null;
  title: string | null;
  canonicalUrl: string | null;
  __typename: string;
}

export interface Owner {
  __typename: string;
  member: Member;
}

export interface Member {
  displayName: string | null;
  name: string;
  id: string;
  locale: string;
  profilePictureId: string;
  bannerId: string | null;
  status: string;
  username: string;
  email: string;
  emailStatus: string;
  newEmail: string | null;
  tagline: string | null;
  lastSeenAt: string;
  createdAt: string;
  updatedAt: string;
  relativeUrl: string;
  url: string;
  externalId: string | null;
  roleId: string;
  flagged: boolean;
  teammate: boolean;
  staffReasons: string[];
  profilePicture: Image;
  badges: any[];
}

export interface Image {
  id: string;
  url: string;
  width: number | null;
  height: number | null;
  dominantColorHex: string | null;
  dpi: number | null;
  cropHeight: number | null;
  cropWidth: number | null;
  cropX: number;
  cropY: number;
  cropZoom: number;
  urls: MediaUrls;
  __typename: string;
}

export interface Space {
  id: string;
  networkId: string;
  name: string;
  description: string;
  slug: string;
  type: string;
  layout: string;
  isHomepage: boolean;
  address: SpaceAddress;
  createdById: string;
  groupId: string;
  imageId: string;
  bannerId: string | null;
  membersCount: number;
  createdAt: string;
  updatedAt: string;
  private: boolean;
  hidden: boolean;
  inviteOnly: boolean;
  nonAdminsCanInvite: boolean;
  customOrderingIndexInGroup: number;
  whoCanPost: string | null;
  whoCanReact: string | null;
  whoCanReply: string | null;
  customSeoDetail: CustomSeoDetail;
  relativeUrl: string;
  url: string;
  image: Image;
}

export interface SpaceAddress {
  path: string;
  exact: boolean;
  editable: boolean;
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
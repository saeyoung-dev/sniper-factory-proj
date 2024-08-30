export type TPost = {
  id?: string; // 추가
  title: string;
  category: string;
  writer: string;
  desc: string;
  thumb: string;
  thumbAvatar: string;
  createdAt: Date; // 추가
};

export type TPostStore = {
  posts: TPost[] | null;
  post: TPost | null;
  fetchPosts: (url?: string) => void;
  fetchPostsOne: (id: string) => void;
  addPosts: (formData: TPost) => Promise<TPost>;
};

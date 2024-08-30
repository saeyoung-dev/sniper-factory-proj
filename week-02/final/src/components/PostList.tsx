import { useEffect } from "react";
import { usePostStore } from "../stores/post.store";
import PostListItem from "./PostListItem";
import PostListLoader from "./PostListLoader";
const PostList = () => {
  const posts = usePostStore((state) => state.posts);
  const fetchPosts = usePostStore((state) => state.fetchPosts);

  useEffect(() => {
    fetchPosts();
  }, []);

  if (!posts) {
    return <PostListLoader />;
  }

  return (
    <>
      <section className="grid md:grid-cols-2 gap-[35px] mt-[80px] mb-[152px]">
        {posts?.map((post) => (
          <PostListItem key={post.id} {...post} />
        ))}
      </section>
    </>
  );
};
export default PostList;

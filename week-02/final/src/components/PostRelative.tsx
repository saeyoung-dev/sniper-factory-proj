import { useParams } from "react-router-dom";
import { usePostStore } from "../stores/post.store";
import { useEffect } from "react";
import PostRelativeItem from "./PostRelativeItem";

const PostRelative = () => {
  const params = useParams();
  const posts = usePostStore((state) => state.posts);
  const fetchPosts = usePostStore((state) => state.fetchPosts);
  useEffect(() => {
    fetchPosts(`posts?id_ne=${params.id}`);
  }, [params.id]);
  return (
    <>
      {/* 관련 게시물 */}
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-[26px] sm:text-[34px] md:text-[30px] font-bold mb-[20px]">
          Recommand Reading
        </h3>
        <ul className="[&>li]:mb-[30px]">
          {posts?.map((post) => (
            <PostRelativeItem key={post.id} {...post} />
          ))}
        </ul>
      </section>
    </>
  );
};
export default PostRelative;

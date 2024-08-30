import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { usePostStore } from "../stores/post.store";

const PostRead = () => {
  const post = usePostStore((state) => state.post);
  const fetchPostsOne = usePostStore((state) => state.fetchPostsOne);
  const params = useParams();
  useEffect(() => {
    fetchPostsOne(params.id as string);
  }, [params.id]);

  return (
    <>
      {/* 이미지 */}
      <section className="max-w-[800px] mx-auto">
        <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-[12px] sm:text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
          {post?.category}
        </strong>
        <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold">
          {post?.title}
        </h3>
        <p className="text-sm text-[#515151] mb-[18px]">
          {post?.createdAt.toString()} • 7 min read
        </p>
        <img
          src={post?.thumb}
          alt="dummy"
          className="object-cover w-full max-h-[278px] rounded-md"
        />
        <div className="mt-4 flex items-center gap-[14px]">
          <img src={post?.thumbAvatar} alt="" className="rounded-s-full" />
          <strong className="text-sm">{post?.writer}</strong>
        </div>
      </section>
      {/* 본문 */}
      <section className="max-w-[800px] mx-auto text-lg sm:text-xl text-[#434343] mt-5 [&>p]:mb-10 ">
        <div className="mb-10">{post?.desc}</div>
      </section>
    </>
  );
};
export default PostRead;

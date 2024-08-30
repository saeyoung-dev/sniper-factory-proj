import { Link } from "react-router-dom";
import { TPost } from "../types/post";

const PostListItem = ({
  id,
  thumb,
  category,
  title,
  createdAt,
  desc,
  thumbAvatar,
  writer,
}: TPost) => {
  return (
    <>
      <Link to={`/read/${id}`}>
        <article>
          <img src={thumb} alt="dummy" className="object-cover" />
          <div>
            <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-[12px] sm:text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
              {category}
            </strong>
            <h3 className="text-lg sm:text-[20px] md:text-[24px] font-bold mb-[12px]">
              {title}
            </h3>
            <p className="text-[#515151]">
              {createdAt.toString()} • 11 min read
            </p>
            <p className="mt-[15px] text-[#434343]">{desc}</p>
            <div className="mt-4 flex items-center gap-[14px]">
              <img src={thumbAvatar} alt="" className="rounded-s-full" />
              <strong className="text-sm">{writer}</strong>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};
export default PostListItem;

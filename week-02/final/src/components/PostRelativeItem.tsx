import { Link } from "react-router-dom";
import { TPost } from "../types/post";

const PostRelativeItem = ({ id, thumb, title, desc }: TPost) => {
  return (
    <>
      <li>
        <Link to={`/read/${id}`} className="block mb-4">
          <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[34px]">
            <img
              src={thumb}
              alt={title}
              className="rounded-md sm:max-w-[250px]"
            />
            <div>
              <h4 className="text-lg sm:text-[22px] font-bold mb-2">{title}</h4>
              <p className="text-base sm:text-lg text-[#4b4b4b] line-clamp-3">
                {desc}
              </p>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};
export default PostRelativeItem;

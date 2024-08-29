import { star } from "../../assets/assets";
import { MovieType } from "../../types/movie";

const MovieItem = ({
  title,
  vote_average,
  release_date,
  poster_path,
}: MovieType) => {
  return (
    <>
      {/* 아이템 1개 */}
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="rounded-md w-full"
        />
        <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
          <h4 className="">{title}</h4>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-200">
          <div className="flex items-center gap-2 font-bold">
            <img
              src={star}
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-yellow-500">{vote_average}</span>
          </div>
          <span className="text-yellow-500 font-bold">{release_date}</span>
        </div>
      </div>
    </>
  );
};
export default MovieItem;

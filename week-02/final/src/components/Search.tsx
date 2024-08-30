import { useEffect } from "react";
import { search } from "../assets/blog/assets";
import useInput from "../hooks/useInput";
import { usePostStore } from "../stores/post.store";

const Search = () => {
  const fetchPosts = usePostStore((state) => state.fetchPosts);
  const [terms, setTerms] = useInput("");

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPosts(`posts?title_like=${terms}`);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [terms]);

  return (
    <>
      <section className="flex justify-center items-center mt-[32px]">
        <div className="w-full max-w-[430px] relative">
          <input
            type="text"
            className="border border-[#DDDDDD] w-full h-[58px] py-[12px] md:py-[18px] px-[20px] md:px-[28px] rounded-[5px] placeholder-[#5f5f5f] text-lg"
            placeholder="Search for Articles"
            value={terms}
            onChange={setTerms}
          />
          <img
            src={search}
            alt=""
            className="absolute top-1/2 right-4 -translate-y-1/2"
          />
        </div>
      </section>
    </>
  );
};
export default Search;

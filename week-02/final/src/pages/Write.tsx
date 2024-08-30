import { useNavigate } from "react-router-dom";
import useImageUpload from "../hooks/useImageUpload";
import useInput from "../hooks/useInput";
import { usePostStore } from "../stores/post.store";

const Write = () => {
  const navigate = useNavigate();
  const addPosts = usePostStore((state) => state.addPosts);

  const [title, onChangeTitle] = useInput("");
  const [category, onChangeCategory] = useInput("");
  const [writer, onChangeWriter] = useInput("");
  const [desc, onChangeDesc] = useInput("");
  const [thumb, onChangeThumb] = useImageUpload("");
  const [thumbAvatar, onChangeThumbAvatar] = useImageUpload("");

  const onSumitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await addPosts({
        title,
        category,
        writer,
        desc,
        thumb,
        thumbAvatar,
        createdAt: new Date(),
      });
      if (data) {
        alert("Post Added Successfully");
        navigate("/");
      }
    } catch (e) {
      alert("Failed to add posts");
    }
  };

  return (
    <>
      <section className="bg-white ">
        <pre>
          {JSON.stringify(
            { title, category, writer, desc, thumb, thumbAvatar },
            null,
            2
          )}
        </pre>
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Add a new Post
          </h2>
          <form onSubmit={onSumitHandler}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type product name"
                  required
                  value={title}
                  onChange={onChangeTitle}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  value={category}
                  onChange={onChangeCategory}
                >
                  <option value={""}>Select category</option>
                  <option value="Next.js">Next.js</option>
                  <option value="React.js">React.js</option>
                  <option value="Vue.js">Vue.js</option>
                  <option value="HTML">HTML</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="item-weight"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Thumbnail
                </label>
                <label
                  className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="user_avatar"
                >
                  Upload file
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50focus:outline-none   h-[42px] p-[7px]"
                  aria-describedby="user_avatar_help"
                  id="user_avatar"
                  type="file"
                  onChange={onChangeThumb}
                />
              </div>
              <div>
                <label
                  htmlFor="writer"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Writer
                </label>
                <input
                  type="text"
                  name="writer"
                  id="writer"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type product name"
                  required
                  value={writer}
                  onChange={onChangeWriter}
                />
              </div>
              <div>
                <label
                  htmlFor="writerAvatar"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Writer Thumnail
                </label>
                <input
                  type="file"
                  name="writerAvatar"
                  id="writerAvatar"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type product name"
                  required
                  onChange={onChangeThumbAvatar}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your description here"
                  value={desc}
                  onChange={onChangeDesc}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex border border-slate-500 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center  bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
            >
              Add Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Write;

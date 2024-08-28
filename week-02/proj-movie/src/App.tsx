import { banner_bg01, star, thumbnail01 } from "./assets/assets";
import MovieLoader from "./components/MovieLoader";

export default function App() {
  return (
    <>
      {/* 헤더 */}
      <header className="absolute top-2 text-white w-full py-4 px-2">
        <div className="container mx-auto">
          <h1 className="text-3xl text-yellow-300 font-bold">SUFLIX</h1>
        </div>
      </header>
      {/* 메인 */}
      <article>
        <section
          className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center px-4"
          style={{ backgroundImage: `url(${banner_bg01})` }}
        >
          <div className="container mx-auto poppins text-white flex flex-col justify-center font-bold h-full">
            <h3 className="text-[18px] xs:text-[20px] sm:text-[30px] text-yellow-300">
              SUFLIX
            </h3>
            <h2 className="text-[25px] xs:text-[40px] sm:text-[60px] mb-4">
              Unlimited <span className="text-yellow-500">Movie</span>,
              <br />
              TVs SHows, & <span className="text-rose-500">Infinite</span>
            </h2>
            <p className="text-xl sm:text-2xl">
              An activity where all the movies in the world come together
            </p>
          </div>
        </section>
      </article>
      {/* 무비 에어리어 */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">Movie LIST</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            <div>
              <img src={thumbnail01} alt="" className="rounded-md w-full" />
              <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
                <h4 className="">SuperMan</h4>
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
                  <span className="text-yellow-500">9.1</span>
                </div>
                <span className="text-yellow-500 font-bold">2022</span>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

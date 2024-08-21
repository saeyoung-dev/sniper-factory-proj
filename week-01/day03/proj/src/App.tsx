import { twMerge } from 'tailwind-merge';

const App = () => {
  const isError = false;
  return (
    <>
      <h1
        className={twMerge(
          'text-3xl, font-bold, text-green-500',
          isError && 'text-rose-400'
        )}
      >
        Hello world!
      </h1>
      <form>
        <input type='text' />
        <button>Click Here</button>
      </form>
    </>
  );
};

export default App;

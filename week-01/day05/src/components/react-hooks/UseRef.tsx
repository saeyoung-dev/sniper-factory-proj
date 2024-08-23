import { useRef } from 'react';

function UseRef() {
  const count = useRef(0);
  // const [numArr, setNumArr] = useState<number[]>([]);

  return (
    <>
      <h1>UseRef: {count.current}</h1>
      <button
        onClick={() => {
          count.current += 1;
          // setNumArr((numArr) => [...numArr, count.current]);
        }}
      >
        Click
      </button>
    </>
  );
}

export default UseRef;

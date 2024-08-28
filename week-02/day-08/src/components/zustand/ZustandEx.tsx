import { useCountStore } from '../../stores/countStore';

const ZustandEx = () => {
  const { count, increment } = useCountStore();
  return (
    <>
      <h1>ZustandEx Component</h1>
      <h1>count: {count}</h1>
      <button onClick={increment}>증가</button>
    </>
  );
};

export default ZustandEx;

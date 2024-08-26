import { useState } from 'react';
import UseEffectCount from './useEffectCount';

function UseEffect() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <h1>UseEffect Component</h1>
      {display && <p>This display is ON!</p>}
      <button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
        Toggle
      </button>
      <UseEffectCount />
    </>
  );
}

export default UseEffect;

import { useState } from 'react';

const ColorBox = () => {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus((prev) => !prev);
  };
  return (
    <>
      <div className='item-middle'>
        <div className='flex flex-col w-[400px] h-[400px]'>
          <img
            onClick={handleClick}
            src={`/light_${status === true ? 'on' : 'off'}.png`}
          />
        </div>
      </div>
    </>
  );
};

export default ColorBox;

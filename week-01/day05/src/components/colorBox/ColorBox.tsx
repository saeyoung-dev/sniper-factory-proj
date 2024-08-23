import React, { useState } from 'react';

const ColorBox = () => {
  const [color, setColor] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    console.log(color);
  };

  return (
    <>
      <div className='item-middle'>
        <div className='flex flex-col'>
          <div
            className={`w-40 h-40 border rounded]`}
            style={{ backgroundColor: color }}
          ></div>
          <input
            name='color'
            type='text'
            className='border rounded border-slate-500 w-40 mt-2 p-2'
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default ColorBox;

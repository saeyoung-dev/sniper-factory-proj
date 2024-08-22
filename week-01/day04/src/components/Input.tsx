import { useState } from 'react';

type InputProps = {
  placeholder: string;
};

const Input = ({ placeholder }: InputProps) => {
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input
        className='rounded p-2 border'
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
export default Input;

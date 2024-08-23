import { useState } from 'react';

type InputProps = {
  placeholder: string;
};

// type InputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> & {
//   type: 'text' | 'password' | 'email' | 'number' | 'date';
// };

const Input = ({ placeholder }: InputProps) => {
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input
        className='rounded p-2 border min-w-[240px] placeholder-slate-400'
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
export default Input;

import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selected, setSelected] = useState('');
  const [checked, setChecked] = useState(true);

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    console.log(email, password);
  };

  return (
    <>
      <form onSubmit={handleClick} className='flex flex-col gap-4'>
        <input
          className='border rounded p-2'
          type='text'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='border rounded p-2'
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          className='border rounded p-2'
          name='gender'
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value='female'>Female</option>
          <option value='male'>Male</option>
        </select>
        <div className='flex items-center justify-center gap-2'>
          <input
            className='border rounded p-2'
            id='checkbox'
            type='checkbox'
            checked={checked}
            onChange={() => setChecked((checked) => !checked)}
          />
          <label htmlFor='checkbox'>Agree</label>
        </div>
        <button type='submit' className='p-2 bg-blue-500 text-white'>
          Login
        </button>
      </form>
    </>
  );
};
export default Login;

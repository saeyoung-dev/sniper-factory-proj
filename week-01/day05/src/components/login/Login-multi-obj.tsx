import { useState } from 'react';

const MultiElemObj = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    name: '',
    date: '',
  });

  const onChangeFormState = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <form>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={formState.email}
          onChange={onChangeFormState}
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={formState.password}
          onChange={onChangeFormState}
        />

        <input
          name='name'
          type='text'
          placeholder='Name'
          value={formState.name}
          onChange={onChangeFormState}
        />
        <input
          name='date'
          type='date'
          value={formState.date}
          onChange={onChangeFormState}
        />
        <select name='gender' id='gender'>
          <option value='female'>female</option>
          <option value='male'>male</option>
        </select>
      </form>
    </>
  );
};
export default MultiElemObj;

import useInput from '../../hooks/useInput';

const MultiElemHooks = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [name, onChangeName] = useInput('');
  const [date, onChangeDate] = useInput('');

  return (
    <>
      <form>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={onChangeEmail}
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={onChangePassword}
        />

        <input
          name='name'
          type='text'
          placeholder='Name'
          value={name}
          onChange={onChangeName}
        />
        <input name='date' type='date' value={date} onChange={onChangeDate} />
      </form>
    </>
  );
};
export default MultiElemHooks;

import { useReducer } from 'react';
import { authReducer } from '../reducer/authReducer';

const AuthReducer = () => {
  const [auth, authDispatch] = useReducer(authReducer, {
    isAuth: false,
    user: null,
    loading: false,
    error: null,
  });

  return (
    <>
      <h1>AuthReducer Component</h1>
      <pre>{JSON.stringify(auth, null, 2)}</pre>
      <button onClick={() => authDispatch({ type: 'LOGIN_REQUEST' })}>
        로그인 요청
      </button>
      <button
        onClick={() =>
          authDispatch({
            type: 'LOGIN_SUCCESS',
            payload: { email: 'effy@gmail.com', name: 'effy' },
          })
        }
      >
        로그인 성공
      </button>
      <button onClick={() => authDispatch({ type: 'LOGIN_FAILURE' })}>
        로그인 실패
      </button>
      <button onClick={() => authDispatch({ type: 'LOGOUT' })}>로그아웃</button>
    </>
  );
};

export default AuthReducer;

type User = { email: string; name: string };

type AuthReducerType = {
  isAuth: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
};

type AuthActionType =
  | { type: 'LOGIN_REQUEST' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE' }
  | { type: 'LOGOUT' };

export const authReducer = (state: AuthReducerType, action: AuthActionType) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuth: true,
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuth: false,
        user: null,
        loading: false,
        error: '아이디와 비밀번호를 확인해주세요',
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuth: false,
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

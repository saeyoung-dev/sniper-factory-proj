export const countReducer = (
  state: number,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case 'decrement':
      return state - action.payload;
    case 'increment':
      return state + action.payload;
    case 'reset':
      return action.payload;
    default:
      return state;
  }
};

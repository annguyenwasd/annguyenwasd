export default function(state = { mode: 'light' }, action) {
  switch (action.type) {
    case 'CHANGE_MODE':
      return { ...state, mode: action.data.mode };
    default:
      return state;
  }
}

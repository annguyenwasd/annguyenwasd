export default function(state = { theme: 'light' }, action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, theme: action.data.theme };
    default:
      return state;
  }
}

import { SERVICE_ITEMS, SET_LOADING, SET_ERROR } from './actions';

const reducer = (state, action) => {
  if (action.type === SERVICE_ITEMS) {
    const { services } = action.payload.data;
    return { ...state, services, isLoading: false, isError: false };
  }
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: action.payload };
  }
  if (action.type === SET_ERROR) {
    return { ...state, isError: action.payload };
  }
  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;

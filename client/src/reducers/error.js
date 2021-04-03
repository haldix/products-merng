import { GET_ERROR, CLEAR_ERROR } from '../utils/constants';

// setting and clearing the error from the redux store which is coming from GraphQL APIs

const errorReducer = (state = '', action) => {
  switch (action.type) {
    case GET_ERROR:
      return action.error;
    case CLEAR_ERROR:
      return '';
    default:
      return state;
  }
};
export default errorReducer;

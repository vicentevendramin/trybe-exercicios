import { SEARCH_BEGIN, SEARCH_SUCCESS, SEARCH_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  character: '',
}

function characterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_BEGIN:
      return {
        ...state,
        isLoading: true,
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        character: action.character[0],
      }
    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default characterReducer;

const initialState = {
  data: [],
  ticketsNum: 5,
  isFetching: false,
  error: null,
};

function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case 'FETCH_SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };

    case 'FETCH_ERROR':
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case 'ADD_MORE_TICKETS':
      return {
        ...state,
        ticketsNum: state.ticketsNum + action.num,
      };

    default:
      return state;
  }
}

export default ticketsReducer;

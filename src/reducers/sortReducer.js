const initialState = {
  sortOption: 'none', //low-rate, optimal, fast
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NONE':
      return {
        sortOption: 'none',
      };

    case 'SET_LOWRATE':
      return {
        sortOption: 'low-rate',
      };

    case 'SET_OPTIMAL':
      return {
        sortOption: 'optimal',
      };

    case 'SET_FAST':
      return {
        sortOption: 'fast',
      };

    default:
      return state;
  }
};

export default sortReducer;

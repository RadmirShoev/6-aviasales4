const initialState = {
  all: true,
  none: true,
  one: true,
  two: true,
  three: true,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE': {
      const newState = {
        ...state,
        [action.value]: !state[action.value],
      };

      const selectAll = ['none', 'one', 'two', 'three'].every((filter) => newState[filter]);

      return {
        ...newState,
        all: selectAll,
      };
    }
    case 'SET_ALL': {
      if (state.all) {
        return {
          all: false,
          none: false,
          one: false,
          two: false,
          three: false,
        };
      } else if (!state.all) {
        return initialState;
      }
      return state;
    }
    default:
      return state;
  }
};

export default filtersReducer;

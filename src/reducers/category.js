const initializedState = [];

const categoryReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "SET_CATEGORY": {
      return ({
        ...state,
        data: action.payload
      });
    }
    default: {
      return state;
    }
  }
}

export default categoryReducer;
const initializeState = 0;

const creditReducer = (state = initializeState, action) => {
  switch (action.type) {
    case "ADD_CREDIT": {
      break;
    }
    case "DECREASE_CREDIT": {
      break;
    }
    default: {
      return state;
    }
  }
}

export default creditReducer;
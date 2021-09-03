const initializeState = {
  uid: "",
  username: "",
  email: "",
  phone: "",
};

const userReducer = (state = initializeState, action) => {
  switch (action.type) {
    case "SET_USER": {
      return ({
        ...state,
        uid: action.payload.uid,
        username: action.payload.username,
        email: action.payload.email,
        phone: action.payload.phone,
      });
    }
    case "DELETE_USER": {
      break;
    }
    default: {
      return state;
    }
  }
}

export default userReducer;
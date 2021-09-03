export const signIn = (user) => {
  return ({
    type: "SET_USER",
    payload: user,
  });
}

export const logOut = (user) => {
  return ({
    type: "DELETE_USER",
    payload: user,
  });
}
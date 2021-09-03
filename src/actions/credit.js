export const addCredit = (credit) => {
  return ({
    type: "ADD_CREDIT",
    payload: credit,
  });
}

export const decreaseCredit = (credit) => {
  return ({
    type: "DECREASE_CREDIT",
    payload: credit,
  });
}
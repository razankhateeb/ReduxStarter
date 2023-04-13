//logs every action dispatched

const error = (store) => (next) => (action) => {
  if (action.type === "SHOW ERROR") console.log(action.payload.error);
  else {
    next(action);
  }
};

export default error;

import * as actionsTypes from "./actionTypes";
let id = 0;

export default function reducer(state = [], action) {
  if (action.type === actionsTypes.ADD_TASK) {
    return [
      ...state,
      {
        id: ++id,
        task: action.payload.task,
        completed: false,
      },
    ];
  } else if (action.type === actionsTypes.REMOVE_TASK) {
    return state.filter((task) => task.id !== action.payload.id);
  } else if (action.type === actionsTypes.COMPLETED_TASK) {
    return state.map((task) =>
      task.id === action.payload.id
        ? {
            ...task,
            completed: true,
          }
        : task
    );
  }

  return state;
}

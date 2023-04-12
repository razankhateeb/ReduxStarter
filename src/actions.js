import * as actionsTypes from "./actionTypes";

export const addTask = (task) => {
  return { type: actionsTypes.ADD_TASK, payload: { task: task } };
};

export const remoevTask = (id) => {
  return { type: actionsTypes.REMOVE_TASK, payload: { id: id } };
};
export const completedTask = (id) => {
  return { type: actionsTypes.COMPLETED_TASK, payload: { id: id } };
};
//usually we cant perform API calls but with thunk we can however we need to manually dispatch actions
// export const fetchTodo = () => async (dispatch) => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const task = await response.json();
//   dispatch(addTask(task.title));
// };

import { addTask, completeTask, removeTask } from "./actions";
import { createReducer } from "@reduxjs/toolkit";
let id = 0;

// export default createReducer([], {
//   //current state, object passed with type and payload properties
//   [addTask.type]: (state, action) => {
//     state.push({
//       id: ++id,
//       task: action.payload.task,
//       completed: false,
//     });
//   },
//   [removeTask.type]: (state, action) => {
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     state.splice(index, 1);
//   },
//   [completeTask.type]: (state, action) => {
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     state[index].completed = true;
//   },
// });

import {
  getTasks,
  addTask,
  completedTask,
  removeTask,
  loadTasks,
  addNewTask,
  updateCompleted,
  deleteTask,
} from "./store/tasks";
import store from "./store/store";
import { addEmployee } from "./store/employees";
import axios from "axios";
import { fetchTasks } from "./store/tasks";
import { apiCallBegan } from "./store/API.JS";

// const gettingTasks = async () => {
//   try {
//     const response = await axios.get("http://localhost:5000/api/tasks");
//     console.log(response);

//     store.dispatch(getTasks({ tasks: response.data }));
//   } catch (err) {
//     store.dispatch({ type: "SHOW_ERROR", payload: { error: err.message } });
//   }
// };

// gettingTasks();
// store.dispatch(fetchTasks());

store.dispatch(loadTasks());
store.dispatch(addNewTask({ task: "Complete the new task " }));
store.dispatch(updateCompleted({ id: 6, completed: true }));
store.dispatch(deleteTask({ id: 6 }));

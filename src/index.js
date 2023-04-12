import { type } from "os";
import { addTask, completedTask, remoevTask, fetchTodo } from "./actions";
import store from "./store";

//will run when something changes in the store
// const unsubscribe =
store.subscribe(() => {
  console.log("Updated", store.getState());
});

store.dispatch(addTask("Task1"));
store.dispatch(addTask("Task2"));
// unsubscribe();
store.dispatch(remoevTask(1));
store.dispatch(completedTask(2));
// store.dispatch(fetchTodo());
console.log(store.getState());

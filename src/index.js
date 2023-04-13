import { type } from "os";
import { addTask, completedTask, removeTask } from "./tasks";
import store from "./store";
import { addEmployee } from "./employees";

//will run when something changes in the store
// const unsubscribe =
store.subscribe(() => {
  console.log("Updated", store.getState());
});

store.dispatch(addEmployee({ name: "Razan" }));
store.dispatch(addTask({ task: "Task1" }));
store.dispatch(addTask({ task: "Task2" }));

// unsubscribe();

store.dispatch(removeTask({ id: 1 }));
store.dispatch(completedTask({ id: 2 }));

// store.dispatch(fetchTodo());

console.log(store.getState());

store.dispatch({ type: "SHOW ERROR", payload: "user not found" });

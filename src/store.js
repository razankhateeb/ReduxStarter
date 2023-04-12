import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(
  reducer,
  devToolsEnhancer({ trace: true })
  //   applyMiddleware(thunk),
);
export default store;

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const initalState = {
  count: 0,
};

// const action = {
//   type: "", //тип действия
//   payload: "", //важная информация будет храниться
// };
const reduce = (state = initalState, action) => {
  switch (action.type) {
    case "plus":
      return {
        ...state,
        count: state.count + 1,
      };
    case "minus":
      return{
        count: state.count - 1
      }
    default:
      return state;
  }
};
const store = createStore(reduce);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

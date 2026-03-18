import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { legacy_createStore as createStore } from "redux";

// ============================================================

const defaultState = {
  cash: 0,
};

// const action = {
//   type: "ADD_CASH",
//   payload: 100
// }

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    //
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };

    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

// ============================================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

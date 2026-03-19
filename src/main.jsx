import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";

// ============================================================

const defaultState = {
  cash: 0,
};

// const action = {
//   type: "ADD_CASH",
//   payload: 100
// }

function reducer(state = defaultState, action) {
  switch (action.type) {
    //
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };

    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
}

const store = createStore(reducer);

// ============================================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

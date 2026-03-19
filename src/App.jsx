import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const addCash = (value) => {
    dispatch({ type: "ADD_CASH", payload: value });
  };

  const getCash = (value) => {
    dispatch({ type: "GET_CASH", payload: value });
  };

  return (
    <>
      <h1>redux bank</h1>

      <h2>{cash}</h2>

      <button onClick={() => addCash(Number(prompt()))}>Пополнить</button>
      <button onClick={() => getCash(Number(prompt()))}>Снять</button>
    </>
  );
}

export default App;

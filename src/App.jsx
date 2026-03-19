import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const addCash = () => {
    dispatch({ type: "ADD_CASH", payload: 1 });
  };

  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: 1 });
  };

  return (
    <>
      <h1>redux bank</h1>

      <h2>{cash}</h2>

      <button onClick={() => addCash()}>Пополнить</button>

      <button onClick={() => getCash()}>Снять</button>
    </>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customerReducer.customers);

  // console.log(cash);
  // console.log(customers);

  const addCash = (value) => {
    dispatch({ type: "ADD_CASH", payload: value });
  };

  const getCash = (value) => {
    dispatch({ type: "GET_CASH", payload: value });
  };

  return (
    <>
      <h1>REDUX Bank</h1>
      <h2>{cash}</h2>

      <div className="button-container">
        <button className="button" onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button className="button" onClick={() => getCash(Number(prompt()))}>
          Снять деньги
        </button>
      </div>

      <div className="button-container">
        <button className="button" onClick={() => addCustomer()}>
          Добавить клиента
        </button>
        <button className="button" onClick={() => deleteCustomer()}>
          Удалить клиента
        </button>
      </div>

      {customers.length > 0 ? (
        <div>
          {
            <ol>
              {customers.map((el) => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ol>
          }
        </div>
      ) : (
        <div>Пользователи не найдены</div>
      )}
    </>
  );
}

export default App;

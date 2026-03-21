import { useDispatch, useSelector } from "react-redux";
import { uniqueNamesGenerator, colors, animals } from "unique-names-generator";
import "./App.css";

//
function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customerReducer.customers);

  //
  const addCash = (value) => {
    dispatch({ type: "ADD_CASH", payload: value });
  };

  const getCash = (value) => {
    dispatch({ type: "GET_CASH", payload: value });
  };

  //
  const addCustomer = () => {
    const newCustomer = {
      id: Date.now(),
      name: uniqueNamesGenerator({
        dictionaries: [colors, animals],
      }),
    };

    dispatch({ type: "ADD_CUSTOMER", payload: newCustomer });
  };

  const deleteCustomer = (customer) => {
    dispatch({ type: "DELETE_CUSTOMER", payload: customer.id });
  };

  //
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
      </div>

      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div className="customer" key={customer.id}>
              <p>{customer.name}</p>

              <button onClick={() => deleteCustomer(customer)}>удалить</button>
            </div>
          ))}
        </div>
      ) : (
        <div>Пользователи не найдены</div>
      )}
    </>
  );
}

export default App;

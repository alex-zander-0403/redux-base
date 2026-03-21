const defaultState = {
  customers: [],
};

export function customerReducer(state = defaultState, action) {
  switch (action.type) {
    //
    // case "ADD_CUSTOMER":
    //   return { ...state, cash: state.cash + action.payload };

    // case "GET_CUSTOMERS":
    //   return { ...state, cash: state.cash - action.payload };

    case "ADD_CUSTOMER":
      return { ...state, customers: [...state.customers, action.payload] };

    // case "REMOVE_CUSTOMERS":
    //   return state;

    default:
      return state;
  }
}

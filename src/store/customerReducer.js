const defaultState = {
  customers: [],
};

export function customerReducer(state = defaultState, action) {
  switch (action.type) {
    //
    case "ADD_CUSTOMER":
      return { ...state, customers: [...state.customers, action.payload] };

    case "DELETE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.filter((el) => el.id !== action.payload),
      };

    default:
      return state;
  }
}

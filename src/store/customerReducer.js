const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const DELETE_CUSTOMER = "DELETE_CUSTOMER";

export function customerReducer(state = defaultState, action) {
  switch (action.type) {
    //
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };

    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((el) => el.id !== action.payload),
      };

    default:
      return state;
  }
}

// action creator
export const addCustomerAction = (payload) => {
  return { type: ADD_CUSTOMER, payload };
};

export const deleteCustomerAction = (payload) => {
  return { type: DELETE_CUSTOMER, payload };
};

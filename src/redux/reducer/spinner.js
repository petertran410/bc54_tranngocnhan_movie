import { TURN_OFF, TURN_ON } from "../constant/spinner";

let initialState = {
  isLoading: false,
};

export let spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TURN_ON: {
      return { ...state, initialState: true };
    }
    case TURN_OFF: {
      return { ...state, initialState: false };
    }
    default:
      return state;
  }
};

import * as actions from "../constant";
const initialState = {
    isError: false,
    isloading: false,
    isSuccess: false
};
const InfoReducer = (state = initialState, action) => {
  console.log(action.payload, "ppppp");
  
  switch (action.type) {
    case actions.GET_USERS_REQUEST:
      return {
        ...state,
        isError: false,
        isloading: true,
        isSuccess: false,
      };
    case actions.GET_USERS_SUCCESS:
      return {
        ...state,
        isError: false,
        isloading: false,
        isSuccess: true,
       result: action.payload.response,
      };
    case action.GET_USERS_ERROR:
      return {
         ...state,
        isSuccess: false,
        isError: true,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default InfoReducer;

import { AuthConstants } from "../constants/constatns";
const intialValue = localStorage.getItem("AuthToken")
  ? localStorage.getItem("AuthToken")
  : undefined;

export default (state = false, actions) => {
  switch (actions.type) {
    case AuthConstants.LOGIN_SUCCESS:
      return {
        ...state,
        authStatus: actions.data
      };

    case AuthConstants.LOGIN_FAILED:
      return {
        ...state,
        error: actions.e
      };

    default:
      return {
        authStatus: false,
        token: intialValue
      };
  }
};

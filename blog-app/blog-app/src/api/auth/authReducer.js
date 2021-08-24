let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).data.user
  : "";
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : "";

export const initialState = {
  user: "" || user,
  token: "" || token,
  isAuth: user ? true : false,
  loading: false,
  errorMessage: null,
};

export const authReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_REGISTER":
      return {
        ...initialState,
        loading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case "REGISTER_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: user,
        token: token,
        isAuth: true,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
        isAuth: false,
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

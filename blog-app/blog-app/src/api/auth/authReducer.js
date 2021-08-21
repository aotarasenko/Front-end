let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).data.user
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).data.user.token
  : "";

console.log(user);

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
        token: action.payload.auth_token,
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
        user: action.payload.user,
        token: action.payload.auth_token,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
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

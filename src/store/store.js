import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = { user: { token: "" }, messages: [] };

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const GET_MESSAGES = "GET_MESSAGES";
export const POST_MESSAGES = "POST_MESSAGES";
export const PATCH_USER = "PATCH_USER";
// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case SIGNUP:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    case GET_MESSAGES:
        return { messages: action.payload};
    case POST_MESSAGES:
      return state;
    case PATCH_USER:
      return state;
    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));

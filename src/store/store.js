import create from "zustand";
import { devtools, redux, persist } from "zustand/middleware";

// define the store's initial state
const initialState = { user: { token: "" }, messages: [] };

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const POST = "POST";
// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: { token: action.payload } };
    case SIGNUP:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(persist(devtools(redux(reducer, initialState))));

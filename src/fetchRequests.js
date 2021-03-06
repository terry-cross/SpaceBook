const baseURL = "https://socialapp-api.herokuapp.com/";

export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const logoutRequest = (token) => {
  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const getMessages = () => {
  return fetch(baseURL + "messages").then((res) => res.json());
};
export const signUpRequest = (username, displayName, password) => {
  return fetch(baseURL + "users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      displayName,
      password,
    }),
  }).then((res) => res.json());
};
///
export const createMessageRequest = (token, message) => {
  return fetch(baseURL + "messages", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: message,
    }),
  }).then((res) => res.json());
};

export const getIntergalacticMessage = (id) => {
  return fetch(baseURL + "messages/" + id).then((res) => res.json());
};

export const getUsersList = () => {
  return fetch(baseURL + "users").then((res) => res.json());
};


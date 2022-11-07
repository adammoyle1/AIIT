import { useState } from "react";

// Class to fetch, store and manage user authentication token
function authState() {
  const [token, setToken] = useState("");

  function getLocalToken() {
    const localToken = localStorage.getItem("token");
    setToken(localToken && localToken);
    return localToken && localToken;
  }

  function saveLocalToken(token) {
    localStorage.setItem("token", token);
    setToken(token);
  }

  function removeLocalToken() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return {
    setToken: saveLocalToken,
    token,
    removeLocalToken,
  };
}

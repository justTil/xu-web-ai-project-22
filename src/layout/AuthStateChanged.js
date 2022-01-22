import React, { useEffect, useState } from "react";
import useAuth from "../hook/auth";
import AuthService from "../service/AuthService";

// Will keep the user logged in, when re-loading the page
export default function AuthStateChanged({ children }) {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* firebase.auth().onAuthChanged((user) => {
      setUser(user);
      setLoading(false);
    }); */
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return children;
}

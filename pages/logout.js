import React, { useEffect } from "react";
import { withProtected } from "../src/hook/route";

function Logout({ auth }) {
  const { logout } = auth;

  useEffect(() => {
    logout()
  }, []);

  return <h1>Loading...</h1>;;
}

export default withProtected(Logout);

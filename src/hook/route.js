import { useRouter } from "next/router";
import React from "react";
import useAuth from "./auth";

export function withPublic(Component) {
  return function WithPublic(props) {
    const auth = useAuth();
    const router = useRouter();

    if (auth.user) {
      // After login, user will be re-directed to the home page
      router.replace("/");

      // Not 100% needed, but will show a quick "loading" screen, instead of the login page again
      return <h1>Loading...</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
}

export function withProtected(Component) {
  return function WithProtected(props) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.user) {
      // After login, user will be re-directed to the home page
      router.replace("/login");

      // Not 100% needed, but will show a quick "loading" screen, instead of the login page again
      return <h1>Loading...</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
}

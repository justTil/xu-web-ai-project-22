import useAuth from "../src/hook/auth";
import { withPublic } from "../src/hook/route";
import Button from "@mui/material/Button";
import * as React from "react";
import Alert from "@mui/material/Alert";

function Login({ auth }) {
  const { user, loginWithGoogle, error } = auth;
  return (
    <Box>
      {error && (
        <Alert severity="error">
          User closed the Google Authentication Popup Window
        </Alert>
      )}

      <Button variant="contained" onClick={loginWithGoogle} color="secondary">
        Google
      </Button>
      <h1>{user?.uid}</h1>
    </Box>
  );
}

export default withPublic(Login);

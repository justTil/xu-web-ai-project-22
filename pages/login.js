import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Card } from "@mui/material";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Copyright from "../src/components/Copyright";
import { withPublic } from "../src/hook/route";

function SignIn({ auth }) {
  const { user, loginWithGoogle, error } = auth;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <Container
      style={{
        width: "100%",
        height: "88vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          height: "50%",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          style={{
            marginBottom: "15px",
          }}
        >
          Login with Google
        </Typography>
        <Box>
          {error && (
            <Alert severity="error">
              User closed the Google Authentication Popup Window
            </Alert>
          )}

          <Button
            variant="contained"
            onClick={loginWithGoogle}
            color="secondary"
          >
            Login
          </Button>
          <h1>{user?.uid}</h1>
        </Box>
      </Card>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default withPublic(SignIn);

import { useRouter } from "next/router";
import useAuth from "../hook/auth";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Container, IconButton, Link } from "@mui/material";

export function AppLayout({ children }) {
  const auth = useAuth();

  const router = useRouter();

  if (router.pathname != "/login") {
    return (
      <main>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Box style={{ 
              flexGrow: 1,
              display: 'flex',
             }}>
              <Typography variant="h6" component="div">
                <Link href="/" color="inherit" marginRight={5} style={{
                  textDecoration: 'none'
                }} >
                  Home
                </Link>
              </Typography>
              <Typography variant="h6" component="div" marginRight={5}>
                <Link href="/about" color="inherit" style={{
                  textDecoration: 'none'
                }} >
                  About
                </Link>
              </Typography>
              <Typography variant="h6" component="div">
                <Link href="/playground" color="inherit" style={{
                  textDecoration: 'none'
                }} >
                  Playground
                </Link>
              </Typography>
            </Box>
            {!auth.user &&
              <Typography variant="h6" component="div">
                <Link href="/login" color="inherit" style={{
                  textDecoration: 'none'
                }} >
                  Login
                </Link>
              </Typography>
            }
            {auth.user !== null &&
              <IconButton onClick={auth.logout} >
                <Avatar alt={auth.user.displayName} src={auth.user.photoURL} />
              </IconButton>
            }
          </Toolbar>
        </AppBar>
        <Container sx={{ p: 3 }}>
          {children}
        </Container>
      </main>
    );
  } else {
    return children;
  }
}

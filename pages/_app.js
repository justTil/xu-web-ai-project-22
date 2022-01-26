import "../styles/globals.css";
import "../src/config/firebase.config";
import { AuthProvider } from "../src/hook/auth";
import AuthStateChanged from "../src/layout/AuthStateChanged";
import { AppLayout } from "../src/layout/AppLayout";
import { ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
      <AuthProvider>
        <ThemeProvider theme={theme}>
        <AppLayout>
          <AuthStateChanged>
            <Component {...pageProps} />
          </AuthStateChanged>
        </AppLayout>
        </ThemeProvider>
      </AuthProvider>
  );
}

export default MyApp;

import { createTheme } from '@mui/material/styles';
import { teal, pink } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: teal[800],
    },
    secondary: {
      main: pink[500],
    },
  },
});
import { blue, pink, teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: `2px dashed ${blue[500]}`,
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: teal[800],
    },
    secondary: {
      main: pink[500],
    },
  },
});

import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      style={{
        clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)",
        background: "#00695c",
        width: "100%",
        height: "50vh",
        textAlign: "center",
        color: "#fafafa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "70px",
      }}
    >
      <Typography variant="h2" component="h1">
        <b>
          Welcome to <span style={{ color: "#e91e63" }}>A</span>NN
          <span style={{ color: "#e91e63" }}>I</span>E
        </b>
      </Typography>
      <Typography variant="h4" component="h2">
        Experience <b style={{ color: "#e91e63" }}>AI</b> the fun way!
      </Typography>
    </Box>
  );
}

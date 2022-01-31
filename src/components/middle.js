import { Box, Typography } from "@mui/material";

export default function Middle() {
  return (
    <Box style={{
      clipPath: "polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)",
      background: "#00695c",
      width: "100%",
      height: "50vh",
      textAlign: "center",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>

    </Box>
  );
}
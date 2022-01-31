import { Box, Typography } from "@mui/material";
import MediaCard from "./MediaCard";
import MediaCard2 from "./MediaCard2";
import MediaCard3 from "./MediaCard3";

export default function Middle() {
  return (
    <Box
      style={{
        width: "100%",
        height: "50vh",
        textAlign: "center",
        color: "#fafafa",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "150px",
        paddingLeft: "150px",
        position: "relative"
      }}
    >
      <Box style={{
        clipPath: "polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)",
        background: "#00695c",
        width: "100%",
        height: "50vh",
        position: "absolute",
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: "-1"
      }} />
      <MediaCard />
      <MediaCard2 />
      <MediaCard3 />
    </Box>
  );
}

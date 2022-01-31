import { Box, Typography } from "@mui/material";
import MediaCard from "./MediaCard";
import MediaCard2 from "./MediaCard2";
import MediaCard3 from "./MediaCard3";

export default function Middle() {
  return (
    <Box
      style={{
        clipPath: "polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)",
        background: "#00695c",
        width: "100%",
        height: "50vh",
        textAlign: "center",
        color: "#fafafa",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "15vw",
        paddingLeft: "15vw",
      }}
    >
      <MediaCard />
      <MediaCard2 />
      <MediaCard3 />
    </Box>
  );
}

import { Box } from "@mui/material";
import Image from "next/image";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <Box
      style={{
        clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0% 100%)",
        background: "#00695c",
        width: "100%",
        height: "10vh",
        padding: "50px 150px 40px",
        textAlign: "center",
        color: "#fafafa",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: "auto"
      }}
    >
      <Copyright color="#fafafa" style={{ marginRight: "10px"}} />
      <Image
        src="/assets/logo.svg"
        alt="Logo"
        height={50}
        width={50}
        href="/"
      />
    </Box>
  );
}

import { Container, Typography } from "@mui/material";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import Middle from "../src/components/middle";


export default function Home() {
  return (
    <div>
      <Header />
      <Container style={{ padding: "50px 150px" }}>
        <Typography variant="h2" textAlign="center">
          Working with AI
        </Typography>
        <Typography variant="body1" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Container>
      <Middle />
      <Container style={{ padding: "50px 150px" }}>
      </Container>
      <Footer />
      <Container />
    </div>
  );
}
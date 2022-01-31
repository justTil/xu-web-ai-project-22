import { Container, Link, Typography } from "@mui/material";
import Footer from "../src/components/footer";

export default function About() {
  return (
    <div
      style={{
        minHeight: "93.50vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        style={{
          padding: "50px 150px",
        }}
      >
        <Typography variant="h2" component="h1">
          About Us
        </Typography>
        <Typography variant="body1">
          Hi, since you landed on the About Us page, we&apos;ll assume
          you&apos;re interested in who&apos;s behind this project. This project
          was developed as part of a module at the XU Exponential University of
          Applied Sciences in Potsdam by Jesse Klotz, Maximilian Bala, and Til
          Schwarze. We had the task of developing a web app, and as a group, we
          decided to create a playground where you can realize smaller AI
          projects to learn more about the topic.
          <br />
          <br />
          If you are interested to learn about the code, you can check out our{" "}
          <Link
            href="https://github.com/justTil/xu-web-ai-project-22"
            color="primary.main"
            target="_blank"
            rel="noopener noreferrer"
          >
            public repository
          </Link>
          .
        </Typography>
      </Container>
      <Footer />
    </div>
  );
}

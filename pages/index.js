import { Container, Typography } from "@mui/material";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import Middle from "../src/components/middle";
import MediaCard from "../src/components/MediaCard";

export default function Home() {
  return (
    <div>
      <Header />
      <Container style={{ padding: "50px 150px" }}>
        <Typography
          variant="h2"
          textAlign="center"
          style={{ marginBottom: "20px" }}
        >
          Annie&apos;s Playground
        </Typography>
        <Typography variant="body1" textAlign="center">
          Who is Annie? Annie is your new AI friend, and she is super motivated
          to learn new things. Together with Annie, you can explore our
          playground and create small AI projects in your browser without the
          additional need for software and hardware. Annie is enthusiastic about
          learning new things, so jump right in and start teaching her all about
          the world around her.
        </Typography>
      </Container>
      <Middle />

      <Container style={{ padding: "50px 150px" }}>
        <Typography
          variant="h2"
          textAlign="center"
          style={{ marginBottom: "20px" }}
        >
          Annie Learn&apos;s Pictures
        </Typography>
        <Typography variant="body1" textAlign="center">
          For now, Annie did not learn anything, but you can change that by
          starting your first own playground project.
          <br />
          <br />
          Image recognition is a technology many smartphones and devices can
          perform without any problem. E.g. Google has Google Lenses, a way for
          you, the user, to photograph a bird, and let Google do the
          calculations. Returning you the result of what kind of species the
          bird is.
          <br />
          <br />
          So what kind of image recognition project can you do? Well that is
          basically up to you, but here are some great ideas we came up with.{" "}
          <br />
          <br />
          Get a friend and train the AI model for both of you, challenge Annie
          to detect who is standing in front of the camera. Teach Annie about
          new objects. What is a lamp? A Keyboard? A good coding documentation?
          Challenge yourself and Annie by trying to find multiple objects.
        </Typography>
      </Container>
      <Footer />
      <Container />
    </div>
  );
}

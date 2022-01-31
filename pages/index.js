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
          Annie's Playground
        </Typography>
        <Typography variant="body1" textAlign="center">
          Suppose you were to survey today and ask developers and tech
          enthusiasts which leading technologies they are currently pursuing. In
          that case, you can very safely assume that you would quickly hear
          Artificial Intelligence or AI. <br />
          <br />
          AI has been a significant and widespread technology for many years
          now, and it will still be a hot topic in 2022. Many large and
          successful tech companies such as Google, NVIDIA, and Tesla use AI
          technology and incorporate it into their products. However, it quickly
          becomes apparent that working with AI can be very complex, requiring
          mathematics, computing power, and large amounts of data, so getting
          started looks comparatively tricky.
          <br />
          <br />
          So how can newcomers and interested people get an insight into
          artificial intelligence without building their supercomputer? <br />
          <br />
          With "Annie's Playground" we offer a playground where all interest
          groups can work with artificial intelligence and get a first
          impression of the technology with just a few clicks. You can create a
          small AI project like image recognition and see if the AI can
          differentiate between you and your friends, and the beauty of it is
          that it works directly in the browser. You don't need any other
          software or hardware, making your first AI project easy to set up.
        </Typography>
      </Container>
      <Middle />
      <Container style={{ padding: "50px 150px" }}>
        <Typography variant="h2" textAlign="center">
          Annie Learn's Pictures
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

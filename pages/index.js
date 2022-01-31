import { Container, Typography } from "@mui/material";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import Middle from "../src/components/middle";

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
          Image Recognition
        </Typography>
        <Typography variant="body1" textAlign="center">
          When you first meet Annie, she doesn&apos;t know many objects and
          pictures yet. However, she learns very quickly, and you can show her
          different things from your room and teach her what it is. Annie can
          compare several diverse pictures and then tell you what she thinks you
          are showing her. If you want, you can save Annie&apos;s progress, and
          in the future, import the progress you two made so that you can
          continue learning together.
        </Typography>
      </Container>
      <Footer />
    </div>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/assets/googleDeepMind.jpg"
        alt="ai picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AlphaGo
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Learn about the amazing AI called "AlphaGo" by Google. Did it manage
          to beat the world's best GO player? Go check it out!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button
          size="small"
          href="https://deepmind.com/research/case-studies/alphago-the-story-so-far"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 325 }}>
      <CardMedia
        component="img"
        height="140"
        image="/assets/aiCard.jpg"
        alt="ai picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Annie&apos;s Playground
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Visit Annie&apos;s playground and start teaching her about cool stuff
          in your room. Maybe ask a friend to join and let Annie meet them.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/playground">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

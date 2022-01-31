import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/assets/nvidiaMercedes.jpg"
        alt="ai picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NVIDIA x Mercedes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          That is something you did not expect, right? NVIDIA and Mercedes
          actually announced their partnership over two years ago.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href="https://group.mercedes-benz.com/innovation/produktinnovation/autonomes-fahren/mercedes-benz-und-nvidia-planen-zusammenarbeit.html?r=dai "
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

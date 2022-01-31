import { Add } from "@mui/icons-material";
import { CardHeader, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import ClassSettingMenu from "./ClassSettingsMenu";

const Class = ({ aiClass, trainingRef }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 1.5 }}>
      <CardHeader
        title={aiClass.name}
        action={<ClassSettingMenu />}
      ></CardHeader>
      <Divider />
      <CardContent>
        <Typography color="text.secondary">
          Bildbeispiele hinzufügen:
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          onMouseDown={() => (trainingRef.current = aiClass.id)}
          onMouseUp={() => (trainingRef.current = -1)}
          style={{ flexDirection: "column", fontSize: "0.6rem" }}
        >
          <Add style={{ marginBottom: "0.5rem" }} />
          Bild machen
        </Button>
      </CardActions>
    </Card>
  );
};

export default Class;

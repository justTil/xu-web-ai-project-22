import { Add } from "@mui/icons-material";
import { CardHeader, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import ClassSettingMenu from "./ClassSettingsMenu";

const Class = ({ aiClass, trainingRef, isActive, setClassArray }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 1.5 }}>
      <CardHeader
        title={aiClass.name}
        action={
          <ClassSettingMenu setClassArray={setClassArray} aiClass={aiClass} />
        }
      ></CardHeader>
      <Divider />
      <CardContent>
        <Typography color="text.secondary">
          Add example images from Webcam:
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          disabled={!isActive}
          onMouseDown={() => (trainingRef.current = aiClass.id)}
          onMouseUp={() => (trainingRef.current = -1)}
          style={{ flexDirection: "column", fontSize: "0.6rem" }}
        >
          <Add style={{ marginBottom: "0.5rem" }} />
          Take Picture (HOLD)
        </Button>
      </CardActions>
    </Card>
  );
};

export default Class;

import { Download } from "@mui/icons-material";
import { Box, CardHeader, Container, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { default as Grid, default as Item } from "@mui/material/Grid";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import * as mobilenetModule from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import React, { useEffect, useRef, useState } from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Class from "../components/Class";
import LinearProgressWithLabel from "../components/LinearProgressWithLabel";

const defaultClasses = [
  {
    name: "Class 1",
    id: 0,
  },
  { name: "Class 2", id: 1 },
];

const classCounter = 1;
// Webcam Image size - defaulted to 227
const IMAGE_SIZE = 227;
// K val for KNN, needs to be scaled accordingly to the num of examples. Set based on experience atm.
const TOPK = 10;

const Playground = (props) => {
  const [classArray, setClassArray] = useState(defaultClasses);
  const [activated, setActivated] = useState(false);
  const updateXarrow = useXarrow();

  const vid = useRef();
  const videoPlaying = useRef(false);
  var knn = useRef();
  var mobilenet = useRef();
  const training = useRef(-1);
  const requestRef = useRef();

  const [results, setResults] = useState([]);
  const classCount = useRef(0);

  async function createAi() {
    knn.current = knnClassifier.create();
    mobilenet.current = await mobilenetModule.load();

    requestRef.current = requestAnimationFrame(animate);
  }

  async function animate() {
    if (videoPlaying.current) {
      // Get image values from Webcam Vid Element
      const image = tf.browser.fromPixels(vid.current);

      let logits;
      // 'conv_preds' is the activation function for the mobile net
      const infer = () => mobilenet.current.infer(image, "conv_preds");

      // Train class if one class is pressed
      if (training.current != -1) {
        logits = infer();

        // Add current image to classifier
        knn.current.addExample(logits, training.current);
      }

      // Run Prediction wheter it is a training run or not
      const numClasses = knn.current.getNumClasses();
      if (numClasses > 0) {
        // When class exists with Example Data, run prediction
        logits = infer();
        const res = await knn.current.predictClass(logits, TOPK);

        const resu = [];
        for (let i = 0; i < classCount.current; i++) {
          // Get numbers of examples for specific class
          const exampleCount = knn.current.getClassExampleCount();

          // Update info text
          if (exampleCount[i] > 0) {
            resu.push({
              id: i,
              examples: exampleCount[i],
              confidence: res.confidences[i],
            });
          }
        }
        setResults(resu);
      }

      // Remove image from TF when finished (Clear memory)
      image.dispose();
      if (logits != null) {
        logits.dispose();
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    if (classArray.length != classCount.current)
      classCount.current = classArray.length;
  }, [classArray]);

  useEffect(() => {
    updateXarrow();
  }, [classArray]);

  async function save() {
    await mobilenet.current.model.save("downloads://xu-your-model");
  }

  return (
    <Container style={{ maxHeight: "84vh" }} maxWidth="xl" sx={{ my: 5 }}>
      <Xwrapper>
        <Grid
          container
          spacing={10}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={5}>
            <Box
              style={{
                height: "80vh",
                position: "sticky",
                top: "0",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
              }}
              onScroll={() => {
                updateXarrow();
              }}
            >
              {classArray.map((aiClass) => {
                return (
                  <Item id={aiClass.name} key={aiClass.id}>
                    <Class
                      setClassArray={setClassArray}
                      isActive={activated}
                      aiClass={aiClass}
                      trainingRef={training}
                    />
                  </Item>
                );
              })}
            </Box>
            <Button
              variant="dashed"
              color="secondary"
              sx={{ width: "100%" }}
              onClick={() => {
                classCounter += 1;
                setClassArray((classes) => [
                  ...classes,
                  { name: "Class " + (classCounter + 1), id: classCounter },
                ]);
              }}
            >
              Add new Class
            </Button>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: "-1",
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  top: "7.128vh",
                  right: "0",
                  bottom: "10vh",
                  left: "0",
                  height: "82.872vh",
                  width: "100vh",
                }}
              >
                {classArray.map((aiClass) => {
                  return (
                    <Xarrow
                      key={aiClass.id}
                      start={aiClass.name}
                      strokeWidth={2}
                      startAnchor="right"
                      endAnchor="left"
                      showHead={false}
                      color="gray"
                      end="trainCard"
                    />
                  );
                })}
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ mb: 1 }}>
              <CardHeader title="Webcam" />
              <CardContent>
                {activated && (
                  <video
                    ref={vid}
                    style={{ borderRadius: "25px", border: "1" }}
                    autoPlay
                    playsInline
                    muted
                  />
                )}
                {!activated && (
                  <Button
                    variant="dashed"
                    color="secondary"
                    sx={{ width: "100%", height: IMAGE_SIZE / 2 }}
                    onClick={() => {
                      setActivated(true);
                      createAi();

                      navigator.mediaDevices
                        .getUserMedia({ video: true, audio: false })
                        .then((stream) => {
                          vid.current.srcObject = stream;
                          vid.current.width = IMAGE_SIZE;
                          vid.current.height = IMAGE_SIZE;

                          vid.current.addEventListener("play", () => {
                            videoPlaying.current = true;
                          });
                          vid.current.addEventListener(
                            "paused",
                            () => (videoPlaying.current = false)
                          );
                        });
                    }}
                  >
                    Activate Webcam
                  </Button>
                )}
              </CardContent>
            </Card>
            <Item>
              <Card id="trainCard">
                <CardHeader title="Training" />
                <CardContent>Automatically trains on adding Images</CardContent>
                <CardActions>
                  <Button disabled sx={{ width: "100%" }} variant="contained">
                    Train Model
                  </Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item id="previewCard">
              <Card>
                <CardHeader
                  title="Preview"
                  action={
                    <Button
                      startIcon={<Download />}
                      disabled={!activated}
                      onClick={() => {
                        save();
                      }}
                    >
                      Export model
                    </Button>
                  }
                />
                <Divider />
                <CardContent>
                  {results.map((res) => (
                    <div key={res.id}>
                      {
                        classArray.filter((aiClass) => {
                          return aiClass.id == res.id;
                        })[0].name
                      }{" "}
                      - {res.examples} Images
                      <LinearProgressWithLabel value={res.confidence * 100} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Item>
            <Xarrow
              start="trainCard"
              end="previewCard"
              color="gray"
              showHead={false}
              strokeWidth={2}
            />
          </Grid>
        </Grid>
      </Xwrapper>
    </Container>
  );
};

export default Playground;

import { Box, CardHeader, Divider } from "@mui/material";
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
import Xarrow from "react-xarrows";
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

const playground = (props) => {
  const [classArray, setClassArray] = useState(defaultClasses);

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
  }, []);

  async function save() {
    await mobilenet.current.model.save("downloads://xu-your-model");
  }

  return (
    <div>
      <Grid container spacing={10} alignItems="center" justifyContent="center">
        <Grid item xs={5}>
          <Card sx={{ mb: 1 }}>
            <CardHeader title="Webcam" />
            <CardContent>
              <video ref={vid} autoPlay playsInline muted />
            </CardContent>
          </Card>
          <Box style={{ maxHeight: "90vh", overflow: "auto" }}>
            {classArray.map((aiClass) => {
              return (
                <Item id={aiClass.name} key={aiClass.name}>
                  <Class aiClass={aiClass} trainingRef={training} />
                  <Xarrow
                    start={aiClass.name}
                    strokeWidth={2}
                    startAnchor="right"
                    endAnchor="left"
                    showHead={false}
                    color="gray"
                    end="trainCard"
                  />
                </Item>
              );
            })}

            <Item>
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
                Klasse hinzufügen
              </Button>
            </Item>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Card id="trainCard">
              <CardHeader title="Training" />
              <CardActions>
                <Button sx={{ width: "100%" }} variant="contained">
                  Modell trainieren
                </Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item id="previewCard">
            <Card>
              <CardHeader
                title="Vorschau"
                action={
                  <Button
                    disabled={mobilenet == undefined}
                    onClick={() => {
                      save();
                    }}
                  >
                    Speichern
                  </Button>
                }
              />
              <Divider />
              <CardContent>
                {results.map((res) => (
                  <div key={res.id}>
                    {
                      classArray.filter((aiClass) => {
                        console.log(aiClass.id);
                        console.log(res.id);
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
    </div>
  );
};

export default playground;

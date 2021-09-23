import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./AdDesign.css";
import Ad from "./Ad";

function AdDesign() {
  const [ad, setAd] = useState("Strawberry");

  const [theme, setTheme] = useState("Light");

  const [font, setFont] = useState(15);

  const styles = {fontSize: font}
  return (
    <div className="AdDesigner">
      <Card style={{ width: "18rem", textAlign: "center" }}>
        <Card.Body className={theme === "Light" ? "light" : "dark"}>
          <Card.Title>Vote For</Card.Title>
          <Card.Subtitle className="mb-2" style={styles}>{ad}</Card.Subtitle>
        </Card.Body>
      </Card>
      {/* <Ad fontSize={font} flavor={ad} darkTheme={theme === "dark"? true : false}/> */}
      <h2>What to Support</h2>

      <Button 
        disabled={ad === "Chocolate"}
        variant="primary"
        onClick={() => {
          setAd("Chocolate");
        }}
      >
        Chocolate
      </Button>
      <Button
        disabled={ad === "Vanilla"}
        variant="secondary"
        onClick={() => {
          setAd("Vanilla");
        }}
      >
        Vanilla
      </Button>
      <Button
        disabled={ad === "Strawberry"}
        variant="success"
        onClick={() => {
          setAd("Strawberry");
        }}
      >
        Strawberry
      </Button>

      <h2>Color Theme</h2>

      <Button
        disabled={theme === "Light"}
        variant="success"
        onClick={() => {
          setTheme("Light");
        }}
      >
        Light
      </Button>
      <Button
        disabled={theme === "Dark"}
        variant="success"
        onClick={() => {
          setTheme("Dark");
        }}
      >
        Dark
      </Button>


      <h2>Font Size</h2>

      <Button
        variant="success"
        onClick={() => {
          setFont((prv) => prv - 1);
        }}
      >
        Down
      </Button>

      <span className="fontSize">{font.toString().padStart(2,  "0")}</span>

      <Button
        variant="success"
        onClick={() => {
          setFont((prv) => prv + 1);
        }}
      >
        Up
      </Button>
    </div>
  );
}
export default AdDesign;

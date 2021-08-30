import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import "./Votes.css";

function Votes() {
  const [chocolateVotes, setChocolateVotes] = useState(0);
  const [vanillaVotes, setVanillaVotes] = useState(0);
  const [strawberryVotes, setStrawberryVotes] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  return (
    <div className="VotesDiv">
      <h1>Vote Here</h1>
      <Button
      disabled = {totalVotes >=30}
        variant="primary"
        onClick={() => {
          setChocolateVotes((prv) => prv+1);
          setTotalVotes((prv) => prv+1)
        }}
      >
        Chocolate
      </Button>
      <Button
      disabled = {totalVotes >=30}
        variant="primary"
        onClick={() => {
          setVanillaVotes((prv) => prv+1);
          setTotalVotes((prv) => prv+1)
        }}
      >
        Vanilla
      </Button>
      <Button
      disabled = {totalVotes >=30}
        variant="primary"
        onClick={() => {
          setStrawberryVotes((prv) => prv+1);
          setTotalVotes((prv) => prv+1)
        }}
      >
        Strawberry
      </Button>
      <p>Chocolate: {chocolateVotes} ({(chocolateVotes / totalVotes).toFixed(1)}%)</p>
      <ProgressBar now={chocolateVotes} className="chocolateBar"/>
      <p>Vanilla: {vanillaVotes} ({(vanillaVotes / totalVotes).toFixed(1)}%)</p>
      <ProgressBar now={vanillaVotes} className="vanillaBar"/>
      <p>Strawberry: {strawberryVotes} ({(strawberryVotes / totalVotes).toFixed(1)}%)</p>
      <ProgressBar now={strawberryVotes} className="strawberryBar"/>

    </div>


  );
}

export default Votes;


import React from "react";
import { Link } from "react-router-dom";
import "./Chips.css";

function Chips() {
  return (
    <div>
      <h1>Enjoy your Chips!</h1>
      <img
        src="https://media.giphy.com/media/IihdHEscpVhglb8jeB/giphy.gif"
        alt="Bag of chips."
      />
      <div>
        <Link to="/">Back to Vending Machine</Link>
      </div>
    </div>
  );
}

export default Chips;

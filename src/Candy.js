import React from "react";
import { Link } from "react-router-dom";
import "./Candy.css";

function Candy() {
  return (
    <div>
      <h1>Enjoy your Candy!</h1>
      <img
        src="https://media.giphy.com/media/iTdyRySB81RO2cTpeZ/giphy.gif"
        alt="Candy."
      />
      <div>
        <Link to="/">Back to Vending Machine</Link>
      </div>
    </div>
  );
}

export default Candy;

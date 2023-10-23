// Chips.js
import React from "react";
import { Link } from "react-router-dom";
import "./Soda.css";

function Soda() {
  return (
    <div>
      <h1>Enjoy your Soda!</h1>
      <img
        src="https://media.giphy.com/media/5zkOgBA8R9qScU44Lo/giphy.gif"
        alt="Soda Bottle."
      />
      <div>
        <Link to="/">Back to Vending Machine</Link>
      </div>
    </div>
  );
}

export default Soda;

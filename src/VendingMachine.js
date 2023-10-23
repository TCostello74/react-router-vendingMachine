import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>This is a Vending Machine</h1>
      <img
        src="https://media.giphy.com/media/bDS3ycLNK08UhgAiI3/giphy.gif"
        alt="Vending Machine."
      />
      <div>
        <h1>What would you like?</h1>
      </div>
      <div>
        <h1><Link to="/chips">Chips</Link></h1>
        <h1><Link to="/soda">Soda</Link></h1>
        <h1><Link to="/candy">Candy</Link></h1>
      </div>
    </div>
  );
}

export default VendingMachine;

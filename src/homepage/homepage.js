import React from "react";
import { Link } from "react-router-dom";

const Game = () => {
  return (
    <div className="homepage">
      <h1>Anywhere Door</h1>
      <Link to="/level1">
        <div className="button">Play</div>
      </Link>
      <div className="button">Quit</div>
    </div>
  );
};

export default Game;

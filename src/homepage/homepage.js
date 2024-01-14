import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const Game = () => {
  return (
    <div className="homepage">
      <h1>Anywhere Door</h1>
      <div className="buttons">
        <Link to="/1">
          <div className="pixel2">
            <h2>Play</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Game;

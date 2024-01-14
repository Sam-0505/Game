import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../tile-view/userContext";

const GameOver = () => {
  const { globUser, setGlobUser, countdown, setCountdown } =
    useContext(UserContext);

  return (
    <div className="homepage">
      <h1>GAME OVER !!!</h1>
      <h2>Final Score:{globUser.score}</h2>
      <div className="buttons">
        <Link to="/1">
          <div className="pixel2" onClick={setCountdown(100)}>
            <h2>Play Again</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GameOver;

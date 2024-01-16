import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "./userContext";

const GameOver = () => {
  const { globUser, setCountdown } = useContext(UserContext);

  return (
    <div className="homepage">
      <h1>GAME OVER !!!</h1>
      <h2>Final Score:{globUser.score}</h2>
      <div className="buttons">
        <Link to="/1">
          <div className="pixel2" onClick={setCountdown(30)}>
            <h2>Play Again</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GameOver;

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../tile-view/userContext";

const NextLevel = () => {
  const { globUser, setGlobUser, countdown, setCountdown } =
    useContext(UserContext);

  const nextLevel = `/${globUser.level}`;
  return (
    <div className="homepage">
      <h1>YOU WON!!!</h1>
      <h2>Score:{globUser.score}</h2>
      <div className="buttons">
        <Link to={nextLevel}>
          <div className="pixel2" onClick={setCountdown(100)}>
            <h2>Next Level</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NextLevel;

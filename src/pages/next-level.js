import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "./userContext";

const NextLevel = () => {
  const { globUser, setGlobUser, countdown, setCountdown } =
    useContext(UserContext);

  const nextLevel = `/${globUser.level}`;
  return (
    <div className="homepage">
      <h1>YOU WON!!!</h1>
      <h2>Total Score:{Number(globUser.score.toFixed(2))}</h2>

      <div className="buttons">
        <Link to={nextLevel}>
          <div className="pixel2" onClick={setCountdown(30)}>
            <h2>Next Level</h2>
          </div>
        </Link>
      </div>
      <Link to="/">
        <div className="pixel2">
          <p>Main Menu</p>
        </div>
      </Link>
    </div>
  );
};

export default NextLevel;

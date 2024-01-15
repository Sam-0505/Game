import React, { useContext } from "react";
import { connect } from "react-redux";

import { HERO_CLASSES_MAP } from "../constants";
import { UserContext } from "../tile-view/userContext";
import "./GameUI.css";

const GameUI = ({ heroClass }) => {
  const { className, portrait } = HERO_CLASSES_MAP[heroClass];
  const { sx, sy } = portrait;
  const { globUser, setGlobUser, countdown } = useContext(UserContext);

  return (
    <div className="game-ui">
      <h1>Level:{globUser.level}</h1>
      {countdown >= 0 && <p>Time Left: {countdown}</p>}
    </div>
  );
};

const mapStateToProps = ({ character }) => ({ heroClass: character.heroClass });

export default connect(mapStateToProps)(GameUI);

import React from "react";
import { connect } from "react-redux";

import { HERO_CLASSES_MAP } from "../constants";
import TimerComponent from "../tile-view/Timer";
import "./GameUI.css";

const GameUI = ({ heroClass }) => {
  const { className, portrait } = HERO_CLASSES_MAP[heroClass];
  const { sx, sy } = portrait;

  return (
    <div className="game-ui">
      <TimerComponent />
    </div>
  );
};

const mapStateToProps = ({ character }) => ({ heroClass: character.heroClass });

export default connect(mapStateToProps)(GameUI);

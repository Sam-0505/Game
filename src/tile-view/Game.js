import React, { useContext } from "react";
import Countdown from "react-countdown";
import GameLoop from "./GameLoop";
import GameUI from "../game-ui/GameUI";
import TileView from "./TileView";
import { UserContext } from "./userContext";

const Game = () => {
  return (
    <>
      <GameUI />
      <GameLoop>
        <TileView />
      </GameLoop>
    </>
  );
};

export default Game;

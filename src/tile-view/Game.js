import React, { useContext } from "react";
import Countdown from "react-countdown";
import GameLoop from "./GameLoop";
import GameUI from "../game-ui/GameUI";
import TileView from "./TileView";
import { useParams } from "react-router-dom";
import { UserContext } from "./userContext";

const Game = () => {
  const { levelNumber } = useParams();

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

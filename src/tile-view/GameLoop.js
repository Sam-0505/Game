import React, { useCallback, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import CanvasContext from "./canvasContext";
import { MAP_DIMENSIONS, TILE_SIZE, MOVE_DIRECTIONS } from "./constants";
import { move, teleport } from "./slices/characterSlice";
import { checkMapCollision } from "./utils";

const mapDispatch = { move, teleport };
const mapStateToProps = ({ character }) => ({ character });

const GameLoop = ({ children, character, move, teleport }) => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isUpdateRequired, setIsUpdateRequired] = useState(false);
  const loopRef = useRef();
  const width = MAP_DIMENSIONS.COLS * TILE_SIZE;
  const height = MAP_DIMENSIONS.ROWS * TILE_SIZE;

  const moveCharacter = useCallback(
    (e) => {
      const key = e.key;

      if (MOVE_DIRECTIONS[key]) {
        const [x, y] = MOVE_DIRECTIONS[key];
        if (!checkMapCollision(character.x + x, character.y + y)) {
          setIsUpdateRequired(true);
          move([x, y]);
        }
      } else if (key == " ") {
        setIsUpdateRequired(true);
        teleport();
      }
    },
    [move, character.x, character.y, teleport, character.teleportMode]
  );

  const tick = useCallback(() => {
    if (isUpdateRequired) {
      setIsVisible(false);
      setIsVisible(true);
      setIsUpdateRequired(false);
    }
    loopRef.current = requestAnimationFrame(tick);
  }, [isUpdateRequired, setIsVisible, setIsUpdateRequired]);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [setCtx]);

  useEffect(() => {
    loopRef.current = requestAnimationFrame(tick);
    return () => {
      loopRef.current && cancelAnimationFrame(loopRef.current);
    };
  }, [loopRef, tick]);

  useEffect(() => {
    document.addEventListener("keypress", moveCharacter);
    return () => {
      document.removeEventListener("keypress", moveCharacter);
    };
  }, [moveCharacter]);

  return (
    <CanvasContext.Provider value={ctx}>
      <canvas ref={canvasRef} width={width} height={height} />
      {isVisible && children}
    </CanvasContext.Provider>
  );
};

export default connect(mapStateToProps, mapDispatch)(GameLoop);

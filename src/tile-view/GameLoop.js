import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import { connect } from "react-redux";
import { useSound } from "use-sound";
import CanvasContext from "./canvasContext";
import { MAP_DIMENSIONS, TILE_SIZE, MOVE_DIRECTIONS, MUSIC } from "./constants";
import { move, teleport, reset } from "./slices/characterSlice";
import { checkMapCollision, isFinish, isMapEdge } from "./utils";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";

const GameLoop = ({ children, character, move, teleport, reset }) => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isUpdateRequired, setIsUpdateRequired] = useState(false);
  const loopRef = useRef();
  const width = MAP_DIMENSIONS.COLS * TILE_SIZE;
  const height = MAP_DIMENSIONS.ROWS * TILE_SIZE;
  const [teleportMusic] = useSound(MUSIC[1]);
  const { globUser, setGlobUser, countdown, setCountdown } =
    useContext(UserContext);
  const nav = useNavigate();

  const moveCharacter = useCallback(
    (e) => {
      const key = e.key;

      if (MOVE_DIRECTIONS[key]) {
        const [x, y] = MOVE_DIRECTIONS[key];
        if (
          (character.teleportMode &&
            !isMapEdge(character.x + x, character.y + y)) ||
          !checkMapCollision(character.x + x, character.y + y, globUser.level)
        ) {
          setIsUpdateRequired(true);
          move([x, y]);
          if (
            !character.teleportMode &&
            isFinish(character.x + x, character.y + y, globUser.level)
          ) {
            reset();
            setGlobUser({
              score: globUser.score + countdown * Math.exp(1),
              level: globUser.level + 1,
            });
            nav("/next-level");
          }
        }
      } else if (key === " ") {
        setIsUpdateRequired(true);
        if (character.teleportMode) {
          teleportMusic();
        }
        teleport(globUser.level);
        if (isFinish(character.x, character.y, globUser.level)) {
          reset();
          setGlobUser({
            score: globUser.score + countdown * Math.exp(1),
            level: globUser.level + 1,
          });
          nav("/next-level");
        }
      }
    },
    [
      move,
      reset,
      character.x,
      character.y,
      teleport,
      character.teleportMode,
      setGlobUser,
    ]
  );

  useEffect(() => {
    if (countdown == -0) {
      nav("/game-over");
    }
  }, [countdown]);

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

  // useEffect(() => {
  //   return () => reset();
  // }, []);

  return (
    <CanvasContext.Provider value={ctx}>
      <canvas ref={canvasRef} width={width} height={height} />
      {isVisible && children}
    </CanvasContext.Provider>
  );
};

const mapDispatch = { move, teleport, reset };
const mapStateToProps = ({ character }) => ({ character });

export default connect(mapStateToProps, mapDispatch)(GameLoop);

import React, { useEffect, useContext, useRef } from "react";
import { connect } from "react-redux";

import CanvasConext from "./canvasContext";
import {
  HEROES_SPRITE,
  HERO_IMAGE_SIZE,
  HERO_CLASSES_MAP,
  DOOR_IMAGE,
} from "../constants";
import { TILE_SIZE } from "./constants";
import { bufferImage, bufferDoor } from "./slices/characterSlice";
import { loadCharacter } from "./slices/statusSlice";
import TimerComponent from "./Timer";

const Character = ({
  x,
  y,
  tx,
  ty,
  sx,
  sy,
  heroClass,
  doorClass,
  heroImg,
  doorImg,
  loadCharacter,
  bufferImage,
  bufferDoor,
  teleportMode,
}) => {
  const ctx = useContext(CanvasConext);
  const imgRef = useRef(null);
  const doorRef = useRef(null);
  useEffect(() => {
    if (ctx && heroImg && doorImg) {
      if (teleportMode) {
        ctx.drawImage(
          document.querySelector(heroImg),
          sx,
          sy,
          HERO_IMAGE_SIZE,
          HERO_IMAGE_SIZE,
          tx * TILE_SIZE,
          ty * TILE_SIZE,
          HERO_IMAGE_SIZE,
          HERO_IMAGE_SIZE
        );
        ctx.drawImage(
          document.querySelector(doorImg),
          x * TILE_SIZE,
          y * TILE_SIZE,
          TILE_SIZE,
          TILE_SIZE
        );
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        ctx.strokeRect(
          (tx - 2) * TILE_SIZE,
          (ty - 2) * TILE_SIZE,
          5 * TILE_SIZE,
          5 * TILE_SIZE
        );
        ctx.strokeStyle = "black";
      } else {
        ctx.drawImage(
          document.querySelector(heroImg),
          sx,
          sy,
          HERO_IMAGE_SIZE,
          HERO_IMAGE_SIZE,
          x * TILE_SIZE,
          y * TILE_SIZE,
          HERO_IMAGE_SIZE,
          HERO_IMAGE_SIZE
        );
      }

      loadCharacter(true);
    }
  }, [
    ctx,
    heroClass,
    heroImg,
    doorImg,
    x,
    y,
    loadCharacter,
    teleportMode,
    sx,
    sy,
  ]);
  return (
    <>
      <img
        id="character"
        alt="character"
        ref={imgRef}
        onLoad={() => bufferImage(`#${imgRef.current.id}`)}
        className="images-buffer"
        src={HEROES_SPRITE}
      />
      <img
        id="door"
        alt="door"
        ref={doorRef}
        onLoad={() => bufferDoor(`#${doorRef.current.id}`)}
        className="images-buffer"
        src={DOOR_IMAGE}
      />
    </>
  );
};

const mapStateToProps = (state) => ({ ...state.character });

const mapDispatch = { loadCharacter, bufferImage, bufferDoor };

export default connect(mapStateToProps, mapDispatch)(Character);

import React, { useEffect, useContext, useRef } from "react";
import { connect } from "react-redux";

import CanvasConext from "./canvasContext";
import { HEROES_SPRITE, HERO_IMAGE_SIZE, HERO_CLASSES_MAP } from "../constants";
import { TILE_SIZE } from "./constants";
import { bufferImage, teleport } from "./slices/characterSlice";
import { loadCharacter } from "./slices/statusSlice";

const Character = ({
  x,
  y,
  tx,
  ty,
  heroClass,
  heroImg,
  loadCharacter,
  bufferImage,
  teleportMode,
}) => {
  const ctx = useContext(CanvasConext);
  const imgRef = useRef(null);

  useEffect(() => {
    if (heroImg) {
      const { sx, sy } = HERO_CLASSES_MAP[heroClass].icon;
      ctx.drawImage(
        document.querySelector(heroImg),
        sx,
        sy,
        HERO_IMAGE_SIZE - 5,
        HERO_IMAGE_SIZE - 5,
        x * TILE_SIZE,
        y * TILE_SIZE,
        HERO_IMAGE_SIZE,
        HERO_IMAGE_SIZE
      );

      console.log("Coordinates:", x, y);
      if (teleportMode) {
        ctx.drawImage(
          document.querySelector(heroImg),
          sx,
          sy,
          HERO_IMAGE_SIZE - 5,
          HERO_IMAGE_SIZE - 5,
          tx * TILE_SIZE,
          ty * TILE_SIZE,
          HERO_IMAGE_SIZE,
          HERO_IMAGE_SIZE
        );
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        ctx.strokeRect(
          (x - 2) * TILE_SIZE,
          (y - 2) * TILE_SIZE,
          5 * TILE_SIZE,
          5 * TILE_SIZE
        );
        ctx.strokeStyle = "black";
      }

      loadCharacter(true);
    }
  }, [ctx, heroClass, heroImg, x, y, loadCharacter, teleportMode]);

  if (teleportMode) {
  }
  return (
    <img
      id="character"
      alt="character"
      ref={imgRef}
      onLoad={() => bufferImage(`#${imgRef.current.id}`)}
      className="images-buffer"
      src={HEROES_SPRITE}
    />
  );
};

const mapStateToProps = (state) => ({ ...state.character });

const mapDispatch = { loadCharacter, bufferImage };

export default connect(mapStateToProps, mapDispatch)(Character);

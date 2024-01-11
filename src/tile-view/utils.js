import { LAYERS, MAP_DIMENSIONS, SOLID_TILES } from "./constants";

export const isSolidTile = (x, y) => {
  for (let layer of LAYERS) {
    if (SOLID_TILES.includes(layer[y][x])) {
      return true;
    }
  }
  return false;
};

export const isMapEdge = (x, y) => {
  const { ROWS, COLS } = MAP_DIMENSIONS;
  return x < 0 || x >= COLS || y < 0 || y >= ROWS;
};

export const checkMapCollision = (x, y) => {
  return isMapEdge(x, y) || isSolidTile(x, y);
};

export const isTeleportBoudary = (x, y, tx, ty) => {
  console.log(x, y, tx, ty);
  return tx - x >= 3 || tx - x <= -3 || ty - y >= 3 || ty - y <= -3;
};

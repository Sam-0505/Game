export const TILE_SIZE = 32;

export const MAP_DIMENSIONS = {
  COLS: 12,
  ROWS: 12,
  TILE_SIZE,
};

export const MAP_TILE_IMAGES = {
  1: "assets/map/woodenfloor.png",
  2: "assets/map/floor_sand_rock_1.png",
  3: "assets/map/floor_sand_stone_5.png",
  4: "assets/map/tree_1_yellow.png",
  5: "assets/map/Concrete-Floor-Tile.png",
  6: "assets/map/floor_sand_stone_7.png",
};

export const MAP_TILE_SCALE = {
  1: 2,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
};

export const MUSIC = {
  1: "assets/music/teleport_music.wav",
};

export const LAYERS = [
  [
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5],
    [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 5],
    [5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 5],
    [5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 5],
    [5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 5],
    [5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 6],
  ],
  [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [4, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 4, 4, 0, 5, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 6, 0, 4, 4, 4, 4, 4, 4, 0],
  ],
];

export const MOVE_DIRECTIONS = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};

export const SOLID_TILES = [5];

export const WIN_TILES = [6];

import { createSlice } from "@reduxjs/toolkit";
import { isTeleportBoudary, checkMapCollision } from "../utils";

const characterSlice = createSlice({
  name: "character",
  initialState: {
    x: 6,
    y: 6,
    heroClass: "FLAME_SWORDSMAN",
    heroImg: null,
    teleportImg: null,
    teleportMode: false,
    tx: 6,
    ty: 6,
  },
  reducers: {
    move(state, action) {
      const [x, y] = action.payload;
      if (
        state.teleportMode &&
        !isTeleportBoudary(state.tx, state.ty, state.x + x, state.y + y)
      ) {
        state.x += x;
        state.y += y;
      } else if (!state.teleportMode) {
        state.x += x;
        state.y += y;
        state.tx += x;
        state.ty += y;
      }
      console.log("States:", state.x, state.y, state.tx, state.ty);
    },
    bufferImage(state, action) {
      state.heroImg = action.payload;
    },
    teleport(state, action) {
      if (state.teleportMode) {
        state.tx = state.x;
        state.ty = state.y;
      }
      state.teleportMode = !state.teleportMode;
    },
  },
});

export const { move, bufferImage, teleport } = characterSlice.actions;

export default characterSlice.reducer;

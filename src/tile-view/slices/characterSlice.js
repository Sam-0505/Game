import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "character",
  initialState: {
    x: 6,
    y: 6,
    heroClass: "FLAME_SWORDSMAN",
    heroImg: null,
    teleportMode: false,
    tx: 6,
    ty: 6,
  },
  reducers: {
    move(state, action) {
      const [x, y] = action.payload;
      if (state.teleportMode) {
        state.tx += x;
        state.ty += y;
      } else {
        state.x += x;
        state.y += y;
        state.tx += x;
        state.ty += y;
      }
    },
    bufferImage(state, action) {
      state.heroImg = action.payload;
    },
    teleport(state, action) {
      if (state.teleportMode) {
        state.x = state.tx;
        state.y = state.ty;
      }
      state.teleportMode = !state.teleportMode;
    },
  },
});

export const { move, bufferImage, teleport } = characterSlice.actions;

export default characterSlice.reducer;

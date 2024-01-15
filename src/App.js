import React from "react";

import GameUI from "./game-ui/GameUI";
import GameLoop from "./tile-view/GameLoop";
import TileView from "./tile-view/TileView";
import Game from "./tile-view/Game";
import Homepage from "./homepage/homepage";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Routes,
  Redirect,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./tile-view/userContext";
import GameOver from "./game-over/game-over";
import NextLevel from "./next-level/next-level";

function App() {
  return (
    <>
      <header></header>
      <main className="content">
        <div className="App">
          <UserContextProvider>
            <Router>
              <Routes>
                <Route exact path="/" element={<Homepage />}></Route>
                <Route exact path="/:levelNumber" element={<Game />}></Route>
                <Route exact path="/game-over" element={<GameOver />} />
                <Route exact path="/next-level" element={<NextLevel />} />
                <Route exact path="/3" element={<Navigate replace to="/" />} />
              </Routes>
            </Router>
          </UserContextProvider>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

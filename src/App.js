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
} from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./tile-view/userContext";

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
                <Route exact path="/level1" element={<Game />}></Route>
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

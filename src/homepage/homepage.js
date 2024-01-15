import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import { UserContext } from "../tile-view/userContext";
import { reset } from "../tile-view/slices/characterSlice";
import { connect } from "react-redux";

const Home = () => {
  const { globUser, setGlobUser } = useContext(UserContext);

  useEffect(() => {
    reset();
    setGlobUser({ score: 0, level: 1 });
  }, []);

  return (
    <div className="homepage">
      <h1>Anywhere Door</h1>
      <div className="buttons">
        <Link to="/1">
          <div className="pixel2">
            <h2>Play</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapDispatch = { reset };

export default connect(null, mapDispatch)(Home);

import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="home-container">
      <h1>Github Battle:</h1>
      <Link className="button" to="/battle">
        Battle
      </Link>
    </div>
  );
}

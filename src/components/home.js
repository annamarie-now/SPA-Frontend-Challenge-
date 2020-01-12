import React from "react";
import "../css/homepage.scss";
import { Button } from "react-bootstrap";


export const home = () => {
  return <div className="homeContainer">
      <div className="title">
      addaVerse</div>
      <div className="buttonContainer" >
      <Button className="homeButton homeButtonStar" href="/stars" variant="outline-secondary">add a star</Button>
      <Button className="homeButton homeButtonUniverse" href="/universes" variant="outline-secondary">add a universe</Button>
      </div>
      </div>;
};

export default home;

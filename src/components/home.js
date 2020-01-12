import React from "react";
import "../css/homepage.scss";
import { Button } from "react-bootstrap";


export const home = () => {
  return <div className="homeContainer">
      <div className="title">WIKIVERSE</div>
      <div className="buttonContainer" >
      <Button className="homeButton homeButtonStar" href="/stars" variant="outline-secondary">Explore stars</Button>
      <Button className="homeButton homeButtonUniverse" href="/universes" variant="outline-secondary">Discover universes</Button>

      </div>
      {/* <div className="imprintContainer" >
      <Button className="homeButton" href="/imprint" variant="outline-secondary">Imprint</Button>
      </div> */}
      </div>;
};

export default home;

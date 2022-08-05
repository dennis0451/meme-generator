import React from "react";
import troll from "../images/troll-face.png";


function Header(){
    return (
      <div className="header">
        <img
          src={troll}
          alt=""
          className="header--image"
        />
        <h1 className="header--title">Meme Generator</h1>
        <h4 className="header--info">Made by: Dennis Corral</h4>
      </div>
    );
}

export default Header
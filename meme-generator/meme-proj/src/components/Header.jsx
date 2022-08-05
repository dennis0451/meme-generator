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
        <h3 className="header--info">Made by: Dennis</h3>
      </div>
    );
}

export default Header
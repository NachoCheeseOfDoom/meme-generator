// import React from 'react'
import "./header.css";

export const Header = () => {
  return (
    <>
      <header className="header-container">
        <img
          className="header-img"
          src="src/assets/images/troll-face.png"
          alt="Troll face"
        />
        <h2 className="header-title">Meme Generator</h2>
        <h4 className="header-project">Create a meme</h4>
      </header>
    </>
  );
};

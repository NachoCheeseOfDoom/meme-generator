import React from "react";
import { useState } from "react";
import memData from "../../memData";
import "./memeForm.css";

export const MemeForm = () => {
  const [meme, setMeme] = useState("https://i.imgflip.com/1bhk.jpg");
  const data = memData.data.memes;
  const handleMemeImg = () => {
    const randomMemeIndex = Math.floor(Math.random() * data.length);
    const imgUrl = data[randomMemeIndex].url;
    setMeme(imgUrl);
    console.log(imgUrl);
  };
  return (
    <main>
      <form className="form-container">
        <div className="form-group">
          <div className="form-inputs">
            <label htmlFor="top -text">Top Text</label>
            <input id="top-text" type="text" placeholder="Shut up" />
          </div>
          <div className="form-inputs">
            <label htmlFor="bottom-text">Bottom Text</label>
            <input
              id="bottom-text"
              type="text"
              placeholder="And take my money"
            />
          </div>
        </div>
        <button onClick={handleMemeImg} className="form-btn" type="button">
          Get a new meme image 🖼
        </button>
      </form>
      <img src={meme} alt="" />
    </main>
  );
};

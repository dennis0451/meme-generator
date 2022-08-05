import React, {useState, useEffect} from "react";

function Meme() {


  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState([]);
  console.log(allMemeImages)
  useEffect( () => {
      fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then((response) => setAllMemeImages(response.data.memes));
    },[])

  function handleChange(event){
    const {name, value, type} = event.target
    console.log(event.target)
    setMeme( prevMeme => {
      return {
        ...prevMeme,
        [name] : value
      }
    })
  }

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input name="topText" value={meme.topText} type="text" placeholder="Top text" className="form--input" onChange={handleChange} />
        <input name="bottomText" value={meme.bottomText} type="text" placeholder="Bottom text" className="form--input" onChange={handleChange}/>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme
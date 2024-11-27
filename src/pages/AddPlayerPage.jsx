import React from 'react'
import { useState } from 'react'
import img1 from '../assets/profilePic1.png'
import img2 from '../assets/profilePic2.png'
import img3 from '../assets/profilePic3.png'
import img4 from '../assets/profilePic4.png'
import img5 from '../assets/profilePic5.png'
import img6 from '../assets/profilePic6.png'
import img7 from '../assets/profilePic7.png'
import img8 from '../assets/profilePic8.png'
import img9 from '../assets/profilePic9.png'
import img10 from '../assets/profilePic10.png'

export default function AddPlayerPage() {

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

  const newPlayer = {
    username: formData.get("playerName"),
    firstName: formData.get("name"),
    lastName: formData.get("lastName"),
    age: formData.get("age"),
    country: formData.get("country"),
    ranking: formData.get("ranking"),
    profileImage: selectedImage,
  };

  const team = formData.get("team");

    if (team === "LagA") {
      handleAddPlayerA(newPlayer);
    } else if (team === "LagB") {
      handleAddPlayerB(newPlayer);
    }
  };

  const MAX_TEAM_SIZE = 5;

  const handleAddPlayerA = (newPlayerA) => {
    setTeamAPlayers((currentPlayers) => {
        if (currentPlayers.length >= MAX_TEAM_SIZE) {
            alert("Team A is full!");
            return currentPlayers; 
        }
        return [...currentPlayers, newPlayerA];
    });
};

const handleAddPlayerB = (newPlayerB) => {
    setTeamBPlayers((currentPlayers) => {
        if (currentPlayers.length >= MAX_TEAM_SIZE) {
            alert("Team B is full!");
            return currentPlayers;
        }
        return [...currentPlayers, newPlayerB];
    });
};

  return (
    <>
      <h1>AddPlayerPage</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor="playerName">Player name: </label>
          <input type="text" placeholder="Zlatan Ibrahimovic" id="playerName" />
        </div>
        <div className='input-container'>
          <label htmlFor="name">Name: </label>
          <input type="text" placeholder="Zlatan" id="name" />
        </div>
        <div className='input-container'>
          <label htmlFor="lastName">Last name: </label>
          <input type="text" placeholder="Ibrahimovic" id="lastName" />
        </div>
        <div className='input-container'>
          <label htmlFor="age">Age: </label>
          <input type="text" placeholder="21" id="age" />
        </div>
        <div className='input-container'>
          <label htmlFor="country">Country: </label>
          <input type="text" placeholder="Sweden" id="country" />
        </div>

        <label htmlFor="ranking">Ranking: </label>
        <select name="ranking" id="ranking">
          <option value="1">Beginner</option>
          <option value="2">Intermediate</option>
          <option value="3">Advanced</option>
          <option value="4">Professional</option>
        </select>
        <div className="radio-button-container">
          <label htmlFor="LagA">Lag A</label>
          <input type="radio" />
          <label htmlFor="LagB">Lag B</label>
          <input type="radio" />
        </div>

        <div className="profile-image-selector">
          <h3>Select a Profile Image</h3>
          {images.map((image, index) => (
            <label key={index}>
              <input
                type="radio"
                name="profileImage"
                value={image}
                checked={selectedImage === image}
                onChange={() => setSelectedImage(image)}
              />
              <div className='imgSelection-container'>
                <img src={image} alt={`Profile ${index + 1}`} width="50" />
              </div>
              
            </label>
          ))}
        </div>
        <button typeof='submit'>Add player</button>
      </form>
    </>
  );
}
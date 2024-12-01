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

  const [teamAPlayers, setTeamAPlayers] = localStorage.getItem("Team A Players list") ? useState(JSON.parse(localStorage.getItem("Team A Players list"))) : useState([]);
  const [teamBPlayers, setTeamBPlayers] = localStorage.getItem("Team B Players list") ? useState(JSON.parse(localStorage.getItem("Team B Players list"))) : useState([]);
  const [newPlayerA, setNewPlayerA] = useState("");
  const [newPlayerB, setNewPlayerB] = useState("");

  const addPlayerA = () => {
    let updatedTeamAPlayers = [...teamAPlayers, newPlayerA];
    localStorage.setItem("Team A Players list", JSON.stringify(updatedTeamAPlayers));
    setTeamAPlayers(updatedTeamAPlayers);
  }

  const addPlayerB = () => {
    let updatedTeamBPlayers = [...teamBPlayers, newPlayerB];
    localStorage.setItem("Team B Players list", JSON.stringify(updatedTeamBPlayers));
    setTeamBPlayers(updatedTeamBPlayers);
  }

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
    const form = e.target; 
    const formData = new FormData(form);

  const newPlayer = {
    username: formData.get("username"),
    firstName: formData.get("name"),
    lastName: formData.get("lastName"),
    age: formData.get("age"),
    country: formData.get("country"),
    ranking: formData.get("ranking"),
    profileImage: selectedImage,
  };

  const team = formData.get("team");

    if (team === "TeamA" || teamAPlayers.length < 5) {
      addPlayerA(newPlayer);
    } else if (team === "TeamB" || teamBPlayers.length < 5) {
      addPlayerB(newPlayer);
    }
  };


  return (
    <>
      <h1>New player inscription</h1>
      <form onSubmit={handleSubmit}>
        

        <div className='form-textInput-container'>
          <div className='input-container'>
            <label htmlFor="playerName">Username: </label>
            <input type="text" placeholder="Faker" id="playerName" name='username'/>
          </div>
          <div className='input-container'>
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder="Sang-Hyeok" id="name" name='name'/>
          </div>
          <div className='input-container'>
            <label htmlFor="lastName">Last name: </label>
            <input type="text" placeholder="Lee" id="lastName" name='lastName'/>
          </div>
          <div className='input-container'>
            <label htmlFor="age">Age: </label>
            <input type="number" placeholder="28" id="age" name='age' />
          </div>
          <div className='input-container'>
            <label htmlFor="country">Country: </label>
            <input type="text" placeholder="Korea" id="country" name='country' />
          </div>
        </div>

        <label htmlFor="ranking">Ranking: </label>
        <select name="ranking" id="ranking">
          <option value="1">Beginner</option>
          <option value="2">Intermediate</option>
          <option value="3">Advanced</option>
          <option value="4">Professional</option>
        </select>
        <div className="radio-button-container">
          <label htmlFor="TeamA">Team A</label>
          <input type="radio"  id='TeamA' name='team'/>
          <label htmlFor="TeamB">Team B</label>
          <input type="radio" id='TeamB' name='team' />
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
                <img src={image} alt={`Profile ${index + 1}`} width="50" />
            </label>
          ))}
        </div>
        <button type='submit' onClick={handleSubmit}>Add player</button>
      </form>
    </>
  );
}
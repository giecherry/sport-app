import { useState } from "react"
const TeamName = () => {
    const[teamA, setTeamA] = useState('A')
    const[teamB, setTeamB] = useState('B')
    
    return (
        <>
            <div className="teamName-change-container">
                <div className="radio-button-container">
                    <input type="radio" id="teamA"/> 
                    <label htmlFor="teamA">{teamA}</label>
                    <input type="radio" id="teamB"/> 
                    <label htmlFor="teamB">{teamB}</label>
                </div>
            <input type="text"/> 
                <button>Change Team Name</button>
            </div>
    </>
    )
}
export default TeamName



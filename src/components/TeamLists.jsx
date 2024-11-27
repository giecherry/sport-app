import { useState } from "react";

const TeamLists = () => {
const [teamAPlayers, setTeamAPlayers] = useState([
    { username: "Player-1", id: 1 },
    { username: "Player-2", id: 2 },
    { username: "Player-3", id: 3 },
    { username: "Player-4", id: 4 },
    { username: "Player-5", id: 5 }
]);
const [teamBPlayers, setTeamBPlayers] = useState([
    { username: "Player-6", id: 6 },
    { username: "Player-7", id: 7 },
    { username: "Player-8", id: 8 },
    { username: "Player-9", id: 9 },
    { username: "Player-10", id: 10 }
]);

const handleDeletePlayerA = (id) => {
    setTeamAPlayers((updatedTeamAPlayers) =>
    updatedTeamAPlayers.filter((player) => player.id !== id)
    );
};

const handleDeletePlayerB = (id) => {
    setTeamBPlayers((updatedTeamBPlayers) =>
    updatedTeamBPlayers.filter((player) => player.id !== id)
    );
};

const handleChangeTeam = (playerId, fromTeam, setFromTeam, toTeam, setToTeam) => {
    const playerToMove = fromTeam.find((player) => player.id === playerId);
    if (playerToMove) {
    const updatedFromTeam = fromTeam.filter((player) => player.id !== playerId);
    const updatedToTeam = [...toTeam, playerToMove];
    setFromTeam(updatedFromTeam);
    setToTeam(updatedToTeam);
    }
};


return (
    <div>
        <div className="team-lists">
            <div className="team-names">
            <h3>Team A</h3>
            <h3>Team B</h3>
            </div>
        <div className="team-players-container">
            <div className="team-players-A">
            {teamAPlayers.map((player) => {
            return (
                <div key={player.id}>
                    <h3>{player.username}</h3>
                    <button onClick={() => handleDeletePlayerA(player.id)}>Delete</button>
                    <button
                    onClick={() =>
                    handleChangeTeam(player.id, teamAPlayers, setTeamAPlayers, teamBPlayers, setTeamBPlayers)
                    }>Change team</button>
                </div>
                );
            })}
        </div>
            <div className="team-players-B">
            {teamBPlayers.map((player) => {
            return (
                <div key={player.id}>
                    <h3>{player.username}</h3>
                    <button onClick={() => handleDeletePlayerB(player.id)}>Delete</button>
                    <button
                        onClick={() =>
                        handleChangeTeam(player.id, teamBPlayers, setTeamBPlayers, teamAPlayers, setTeamAPlayers)
                        }>Change team</button>
                </div>
                );
            })}
        </div>
        </div>
    </div>
    </div>
);
};

export default TeamLists;

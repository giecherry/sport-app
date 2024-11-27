import { Link } from "react-router-dom"
import TeamName from "../components/TeamName"
import TeamLists from "../components/TeamLists"

const HomePage = () => {
    return (
        <div>
            <h1>Sport App</h1>
            <TeamName />
            <Link to="/addplayer"><button className="add-player-btn">Add player</button></Link>
            <TeamLists  />
        </div>
    )
}

export default HomePage
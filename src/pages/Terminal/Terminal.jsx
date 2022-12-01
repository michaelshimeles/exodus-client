import NavBar from "../../components/NavBar/NavBar"
import CollectionBio from "../../components/CollectionBio/CollectionBio"
import StatsBar from "../../components/StatsBar/StatsBar"
const Terminal = () => {
    return (
        <div className="terminal">
            <NavBar />
            <CollectionBio />
            <StatsBar />
        </div>
    )
}

export default Terminal
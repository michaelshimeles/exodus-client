import NavBar from "../../components/NavBar/NavBar"
import CollectionBio from "../../components/CollectionBio/CollectionBio"
import StatsBar from "../../components/StatsBar/StatsBar"
import ListingsCard from "../../components/ListingsCard/ListingsCard"
const Terminal = () => {
    return (
        <div className="terminal">
            <NavBar />
            <CollectionBio />
            <StatsBar />
            <ListingsCard />
        </div>
    )
}

export default Terminal
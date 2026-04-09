import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import PlayLists from "PlayLists"

const PlaylistsPage = () => {
  const { user } = useContext(UserContext)
return (
  <header className="App-header">
    <PlayLists />
  </header>
)}

export default PlaylistsPage;
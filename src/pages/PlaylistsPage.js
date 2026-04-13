import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext"
import PlayLists from "../components/PlayLists"

const PlaylistsPage = () => {
  useContext(UserContext)
return (
  <header className="App-header">
    <PlayLists />
  </header>
)}

export default PlaylistsPage;
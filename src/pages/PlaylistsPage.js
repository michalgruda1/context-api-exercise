import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext"
import PlayLists from "../components/PlayLists"

const PlaylistsPage = () => {
  const context = useContext(UserContext);

  console.log('PlaylistsPage context.data', context.data);
  return (
    <header className="App-header">
      <PlayLists playlists={context.data}/>
    </header>
)}

export default PlaylistsPage;
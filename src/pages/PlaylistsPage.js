import React, { useContext } from 'react';

import PlayLists from '../components/PlayLists';
import { PlaylistsContext } from '../context/PlaylistsContext';

const PlaylistsPage = () => {
  const context = useContext(PlaylistsContext);

  console.log('PlaylistsPage context.playlists', context?.playlists);
  return (
    <main>
      <PlayLists playlists={context?.playlists} />
    </main>
  );
};

export default PlaylistsPage;

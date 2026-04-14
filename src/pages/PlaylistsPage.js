import React, { useContext } from 'react';

import PlayLists from '../components/PlayLists';
import { PlaylistsContext } from '../context/PlaylistsContext';

const PlaylistsPage = () => {
  const context = useContext(PlaylistsContext);
  console.log('PlaylistsPage context.data', context.data);
  return (
    <main>
      <PlayLists playlists={context.data} />
    </main>
  );
};

export default PlaylistsPage;

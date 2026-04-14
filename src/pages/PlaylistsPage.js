import React, { useContext } from 'react';

import PlayLists from '../components/PlayLists';
import { UserContext } from '../context/UserContext';

const PlaylistsPage = () => {
  const context = useContext(UserContext);
  console.log('PlaylistsPage context.data', context.data);
  return (
    <main>
      <PlayLists playlists={context.data} />
    </main>
  );
};

export default PlaylistsPage;

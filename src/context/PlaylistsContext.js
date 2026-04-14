import axios from 'axios';
import { createContext, useCallback, useEffect, useState } from 'react';

export const PlaylistsContext = createContext();

const PlaylistsContextProvider = ({ children }) => {
  const empty = {
    userName: undefined,
    playlists: []
  };

  const [playlistsState, setPlaylistsState] = useState(empty);

  const fetchPlaylistsData = useCallback(() => {
    axios
      .get('user/2529/playlists')
      .then(response => {
        console.log(response.data);
        setPlaylistsState({
          userName: response.data.playlists[0]?.creator.name ?? 'unknown',
          playlists: response.data.playlists
        });
      })
      .catch(error => console.log('error: ', error));
  }, []);

  useEffect(() => {
    fetchPlaylistsData();
  }, [fetchPlaylistsData]);

  return <PlaylistsContext.Provider value={playlistsState}>{children}</PlaylistsContext.Provider>;
};

export default PlaylistsContextProvider;

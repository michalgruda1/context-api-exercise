import axios from 'axios';
import { createContext, useCallback, useEffect, useState } from 'react';

export const PlaylistsContext = createContext(undefined);

const PlaylistsContextProvider = ({ children }) => {
  const [playlistsState, setPlaylistsState] = useState({
    userName: null,
    playlists: []
  });

  const fetchPlaylistsData = useCallback(() => {
    axios
      .get('user/2529/playlists')
      .then(response => {
        console.log('response.data', response.data);
        const playlistsState = {
          userName: response.data.data[0]?.creator.name ?? 'unknown',
          playlists: response.data.data ?? []
        };
        setPlaylistsState(playlistsState);
      })
      .catch(error => console.log('error: ', error));
  }, []);

  useEffect(() => {
    fetchPlaylistsData();
  }, [fetchPlaylistsData]);

  return <PlaylistsContext.Provider value={playlistsState}>{children}</PlaylistsContext.Provider>;
};

export default PlaylistsContextProvider;

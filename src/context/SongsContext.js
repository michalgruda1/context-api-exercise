import axios from 'axios';
import { createContext, useCallback, useEffect, useState } from 'react';

const empty = {
  playlistId: '',
  playlistUrl: '',
  songs: []
};

export const SongsContext = createContext(empty);

const SongsContextProvider = ({ children }) => {
  const [songsState, setSongsState] = useState(empty);

  const fetchSongsData = useCallback(playlistUrl => {
    axios
      .get(playlistUrl)
      .then(result => {
        console.log(result.data);
        setSongsState(result.data);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetchSongsData();
  }, [fetchSongsData]);

  return <SongsContext.Provider value={songsState}>{children}</SongsContext.Provider>;
};

export default SongsContextProvider;

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const Songs = props => {
  const playlistUrl = props.playlistUrl;
  console.log('playlistUrl: ', playlistUrl);

  const [songs, setSongs] = useState([]);

  const fetchSongsData = useCallback(playlistUrl => {
    axios
      .get(playlistUrl)
      .then(result => {
        console.log('result: ', result);
        setSongs(result?.data.songs ?? []);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetchSongsData(playlistUrl);
  }, [fetchSongsData, playlistUrl]);

  return songs.map(song => {
    return (
      <>
        <div>{song?.name}</div>
      </>
    );
  });
};

export default Songs;

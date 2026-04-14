import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Song from './Song';

const Songs = props => {
  console.log('Song props: ', props);
  const [playlistUrl, playlistTitle] = props;
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

  return songs.map(song => (
    <>
      <h2>{playlistTitle}</h2>
      <Song
        key={song.id}
        title={song.title}
        album={song.album.title}
        artist={song.artist}
        length={song.length}
      />
    </>
  ));
};

export default Songs;

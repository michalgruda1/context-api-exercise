import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Song from './Song';

const Songs = props => {
  console.log('Song props: ', props);
  const { playlistUrl } = props;
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSongsData = useCallback(playlistUrl => {
    axios
      .get(playlistUrl)
      .then(result => {
        console.log('result: ', result);
        setSongs(result?.data.data ?? []);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetchSongsData(playlistUrl);
  }, [fetchSongsData, playlistUrl]);

  console.log('Songs: ', songs);

  return (
    <>
      {loading && <div className='spinner' />}
      {songs.map((song, index) => {
        console.log('Song: ', song);
        return (
          <Song
            index={index}
            key={song.id}
            title={song.title}
            album={song.album.title}
            artist={song.artist.name}
            duration={song.duration}
          />
        );
      })}
    </>
  );
};

export default Songs;

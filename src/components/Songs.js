import axios from 'axios';
import { useContext, useEffect } from 'react';

import { PlaylistsContext } from '../context/PlaylistsContext';

const Songs = props => {
  const [playlistId, playlistUrl] = props;

  const context = useContext(PlaylistsContext);

  const tracks = useEffect(() => {
    axios
      .get(playlistUrl)
      .then(result => {
        const songs = result.data;
        context.playlists.find(pl => pl.id == playlistId).songs == songs;
      })
      .catch(error => console.log(error));
  });

  tracks.array.forEach(track => {
    return (
      <>
        <div>{track.name}</div>
      </>
    );
  });
};

export default Songs;

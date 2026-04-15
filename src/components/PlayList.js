import { useState } from 'react';
import Songs from './Songs';

const PlayList = props => {
  console.log('PlayList props: ', props);

  const [expanded, setExpanded] = useState(false);

  const {
    id,
    title,
    pictureSmall,
    pictureMedium,
    pictureBig,
    pictureXl,
    tracklist,
    noOfTracks,
    url = tracklist ?? `playlist/${id}/tracks`
  } = props;

  return (
    <div
      className={`playlist-card${expanded ? ' expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <img
        className='pictureSmall'
        src={pictureXl ?? pictureBig ?? pictureMedium ?? pictureSmall}
        alt={title}
      />
      <div className='playlistName'>{title}</div>
      <div className='playlistNoOfSongs'>{noOfTracks}</div>
      {expanded && <Songs playlistUrl={url} />}
    </div>
  );
};
export default PlayList;

import { useRef, useState } from 'react';
import Songs from './Songs';

const PlayList = props => {
  console.log('PlayList props: ', props);

  const [expanded, setExpanded] = useState(false);
  const [collapsing, setCollapsing] = useState(false);
  const collapseTimer = useRef(null);

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

  const handleClick = () => {
    if (expanded) {
      setCollapsing(true);
      collapseTimer.current = setTimeout(() => {
        setExpanded(false);
        setCollapsing(false);
      }, 350);
    } else {
      clearTimeout(collapseTimer.current);
      setCollapsing(false);
      setExpanded(true);
    }
  };

  const playlistCardClassName =
    'playlist-card' +
    (expanded && !collapsing ? ' expanded' : collapsing ? ' collapsing' : '');

  return (
    <div
      className={playlistCardClassName}
      onClick={handleClick}
    >
      <img
        className='pictureSmall'
        src={pictureXl ?? pictureBig ?? pictureMedium ?? pictureSmall}
        alt={title}
      />
      <h2 className='playlistName'>
        {title}
        <span className='verticalTextSeparator'>&nbsp;| </span>
        <span className='playlistNoOfSongs'>{noOfTracks}</span>
      </h2>
      {(expanded || collapsing) && <Songs playlistUrl={url} />}
    </div>
  );
};
export default PlayList;

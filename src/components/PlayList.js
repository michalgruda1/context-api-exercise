import Songs from './Songs';

const PlayList = props => {
  console.log('PlayList props: ', props);

  const { id, title, pictureSmall, tracklist, noOfTracks, url = tracklist ?? `playlist/${id}/tracks` } = props;

  return (
    <div className='playlist-card'>
      <img className='pictureSmall' src={pictureSmall} alt={title} />
      <div className='playlistName'>{title}</div>
      <div className='playlistNoOfSongs'>{noOfTracks}</div>
      <Songs playlistUrl={url} />
    </div>
  );
};
export default PlayList;

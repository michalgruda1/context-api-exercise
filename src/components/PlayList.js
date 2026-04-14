import Songs from './Songs';

const PlayList = props => {
  console.log('Tracks props: ', props);

  const { id, title, pictureSmall, tracklistUrl, noOfTracks, url = tracklistUrl ?? `playlist/${id}/tracks` } = props;

  return (
    <div className='playlist-card'>
      <img className='pictureSmall' src={pictureSmall} alt={title} />
      <div className='playlistName'>{title}</div>
      <div className='playlistNoOfSongs'>{noOfTracks}</div>
      <Songs playlistUrl={url} playlistId={id} />
    </div>
  );
};
export default PlayList;

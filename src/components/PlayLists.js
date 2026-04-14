import PlayList from './PlayList';

const PlayLists = props => {
  console.log('PlayLists props:', props);

  return (
    <>
      <div className='playlists'>
        {props.playlists?.map(el => {
          return (
            <PlayList
              key={el.id}
              title={el.title}
              pictureSmall={el.picture_small}
              tracklistUrl={el.tracklist}
              noOfTracks={el.nb_tracks}
            />
          );
        })}
      </div>
    </>
  );
};

export default PlayLists;

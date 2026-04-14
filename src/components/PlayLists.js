import PlayList from './PlayList';
import { NormalizeUrlForCorsHack } from './Utils';

const PlayLists = props => {
  console.log('PlayLists props:', props);

  return (
    <>
      <div className='playlists'>
        {props?.playlists?.map(el => {
          const url = NormalizeUrlForCorsHack(el.tracklistUrl);
          return (
            <PlayList
              id={el.id}
              key={el.id}
              title={el.title}
              pictureSmall={el.picture_small}
              pictureMedium={el.picture_medium}
              pictureBig={el.picture_big}
              pictureXl={el.picture_xl}
              tracklistUrl={url}
              noOfTracks={el.nb_tracks}
            />
          );
        })}
      </div>
    </>
  );
};

export default PlayLists;

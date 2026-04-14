import { useMemo } from 'react';

import PlayList from './PlayList';

const PlayLists = props => {
  console.log('PlayLists props:', props);

  const url = useMemo(url => NormalizeUrlForCorsHack(url), []);

  return (
    <>
      <div className='playlists'>
        {props.playlists?.map(el => {
          return (
            <PlayList
              key={el.id}
              title={el.title}
              pictureSmall={el.picture_small}
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

function NormalizeUrlForCorsHack(urlBefore) {
  const regex = /https?:\/\/api.deezer.com\/(.)+/i;
  const urlAfter = urlBefore.match(regex);
  return urlAfter;
}

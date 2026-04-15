import { FormatTime } from './Utils';

const Song = props => {
  const { index, title, album, artist, duration } = props;

  return (
    <>
      <div className='song_index'>{index}.</div>
      <div>
        <b>{artist}</b>
      </div>
      <div>
        <i>
          {title} - <small>{FormatTime(duration)}</small>
        </i>
      </div>
      <div>{album}</div>
    </>
  );
};

export default Song;

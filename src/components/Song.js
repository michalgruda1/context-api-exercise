import { FormatTime } from './Utils';

const Song = props => {
  const { index, title, album, artist, duration } = props;

  return (
    <>
      <div>
        <span className='song_index'>{index + 1}. </span>
        <b>{artist}</b>
        <span className='verticalTextSeparator'>&nbsp;| </span>
        <i>
          {title} - <small>{FormatTime(duration)}</small>
        </i>
        <span className='verticalTextSeparator'> | </span>
        <span className='cdIcon'>💿</span>
        <small>{album}</small>
      </div>
    </>
  );
};

export default Song;

const Song = props => {
  const [title, album, artist, length] = props;

  return (
    <>
      <div>
        <b>
          {title} - {length}
        </b>
      </div>
      <div>{album}</div>
      <div>
        <i>{artist}</i>
      </div>
    </>
  );
};

export default Song;

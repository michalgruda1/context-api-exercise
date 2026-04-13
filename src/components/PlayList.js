import Tracks from './Tracks';

const PlayList = (props) => {
    console.log('Tracks props: ', props);

    const {id,title,pictureSmall,tracklistUrl,noOfTracks} = props;
    const url = tracklistUrl ?? `playlist/${id}/tracks`;

    return (
    <>
        <img className="pictureSmall" src={pictureSmall} />
        <div className="playlistName">
            {title}
        </div>
        <div className="playlistNoOfSongs">
            {noOfTracks}
        </div>
        <Tracks url={url}/>
    </>)
}
export default PlayList;
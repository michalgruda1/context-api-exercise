import { useRef } from "react";

const PlayList = (props) => {
    const songs = useRef(props.playlist.songs);
<>
    <image className={props.image.class} width={props.image.width} height={props.image.width} src={props.image.source} alt="Playlist image"/>
    <div className="playlistName">
        {props.playlist.name}
    </div>
    <div className="playlistNoOfSongs">
        {songs.length}
    </div>
    <div className="playlistSongs">
        {songs}
    </div>
</>
}
export default PlayList;
import PlayList from 'PlayList';

const PlayLists = (props) => {
    return (
        <>
        <div class="header">Playlists of <span class="userName">username</span></div>
        <div class="playlists">
            {props.playlists?.map(el => {
                return <PlayList key={el.id} />
            })};
        </div>
        </>
    )
}

export default PlayLists;

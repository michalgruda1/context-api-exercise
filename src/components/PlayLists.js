import PlayList from './PlayList';

const PlayLists = (props) => {
    return (
        <>
        <div className="header">Playlists of <span className="userName">username</span></div>
        <div className="playlists">
            {props.playlists?.map(el => {
                return <PlayList key={el.id} />
            })};
        </div>
        </>
    )
}

export default PlayLists;

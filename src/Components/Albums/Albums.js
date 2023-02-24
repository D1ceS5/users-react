import closeIcon from '../../images/close.svg'
import "./Albums.scss"
import {useDispatch} from "react-redux";
import {clearAlbums} from "../../State/Reducers/albumReducer";
function Albums({open,albums}) {
    const dispatch = useDispatch()

    function closeAlbums(){
        dispatch(clearAlbums())
    }

    function createAlbum(album){
        return (
        <div className="album" key={album.id}>
            {album.title}
        </div>
        )
    }

    function contentClick(e){
        e.stopPropagation();
    }

    return (
        <div onClick={closeAlbums} className={open?"modal-container":"hidden"}>
            <div onClick={contentClick} className="modal-content">
                <img alt="icon" onClick={closeAlbums} className="close-icon" src={closeIcon} />
                <div className="album-list">
                    {albums.map(a=>createAlbum(a))}
                </div>
            </div>
        </div>
    );
}

export default Albums;

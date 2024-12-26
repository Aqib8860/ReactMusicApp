import { Song } from "../utils/api-client";


const SongCard = ({song}: {song:Song}) => {
    return (
        <div className="card" style={{width: '20rem'}}>
            <img className="card-img-top" src={song.artworkUrl100} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{song.trackName}</h5>
            </div>
            
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Artist : {song.artistName}</li>
                <li className="list-group-item">Collection : {song.collectionName}</li>
            </ul>
            
            <div className="card-body">
                <audio src={song.previewUrl} controls></audio>
            </div>
        </div>
    );

}

export default SongCard;

import { Song } from "../utils/api-client";
import SongCard from "./SongCard";


const Songs = ({songs}: {songs:Song[]}) => {
    return (
        <div className='container d-flex justify-content-around flex-wrap'>
            {
                songs.map((song) => (<SongCard key={song.trackId} song={song} />)) // Make sure to use `key` prop
            }
        </div>
    );
}

export default Songs;

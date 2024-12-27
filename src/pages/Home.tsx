import { useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Songs from "../components/Songs";
import fetch_all_songs, {Song} from "../utils/api-client";

export const Home = () => {
    const [search, setSearch] = useState("Atif+Aslam");

    const [allsongs, setSongs] = useState<Song[]>([]); // State to store songs

    const fetch_songs = async () => {
        setSearch("Atif+Aslam");

        const songs: Song[] = await fetch_all_songs(search);
        setSongs(songs);
    }

    useEffect (() => {
        fetch_songs();
    }, [search]);

    return(
        <div>
            <Navbar />
            <Songs songs={allsongs}/>
        </div>

    );
}



import { useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Songs from "../components/Songs";
import fetch_all_songs, {Song} from "../utils/api-client";

export const Home = () => {

    const [allsongs, setSongs] = useState<Song[]>([]);
    const [searchValue, setSearchValue] = useState<string>("Atif+Arijit");

    const fetch_songs = async (query:string) => {
        const songs: Song[] = await fetch_all_songs(query);
        if (songs) {
            setSongs(songs);
        } else {
            <h1>No songs</h1>
        }
    };

    useEffect (() => {
        fetch_songs(searchValue);
    }, [searchValue]);

    return(
        <div>
            <Navbar  setsearchValue={setSearchValue}/>
            <Songs songs={allsongs}/>
        </div>

    );
}



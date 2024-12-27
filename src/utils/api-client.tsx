
export type Song = {
    trackId: number,
    trackName: string;
    artistName: string;
    collectionName: string;
    previewUrl: string;
    artworkUrl100: string;
}
 

const fetch_all_songs = async (search:string):Promise<Song[]> => {
    let uri = `${import.meta.env.VITE_ITUNES_URL}?term=${search}&limit=25`
    console.log("url ", uri)
    const response = await fetch(uri);
    const data = await response.json();//-
    
    const  songs:Song[] = data.results;
    
    const all_songs: Song[] = songs.map(s=>{
        // Destructructure the data
        const  {trackId, trackName, artistName, collectionName, previewUrl, artworkUrl100}:Song = s;

        return {trackId, trackName, artistName, collectionName, previewUrl, artworkUrl100};
    });
    return all_songs;
}

export default fetch_all_songs;

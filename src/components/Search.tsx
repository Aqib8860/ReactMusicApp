import { useRef } from "react";

const Search = ({setsearchValue}: {setsearchValue: (value:string) => void}) => {
    const searchText = useRef<HTMLInputElement | null>(null);

    const searchSongsButton = () => {
        console.log("Searching...", searchText.current?.value);
        const searchTextValue = searchText.current?.value;
        if (searchTextValue){
            setsearchValue(searchTextValue);
        }

    }

    return (
        <div className="d-flex">
            <input
                className="form-control search-box"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref={searchText}
            />
            <button className="btn btn-primary" onClick={searchSongsButton}>Search</button>
        </div>
    );
}

export default Search
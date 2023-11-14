import React from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
function Search({ search, onSearchChange }) {
  return (
    <div className="search-flex">
      <SearchRoundedIcon />
      <input
        placeholder="search"
        onChange={(e) => {
          onSearchChange(e);
        }}
        value={search}
      />
    </div>
  );
}

export default Search;

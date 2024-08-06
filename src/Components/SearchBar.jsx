import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const Navigate = useNavigate();
    const [searchInput, setSearchInput]= useState("");
    const handleChange = (e)=> {
        e.preventDefault();
        setSearchInput(e.target.value);
    } 

    const handleSearch = () => {
      Navigate(`/search/${setSearchInput}`)
    };
 
  return (
    <div className="search-bar">
      <input
      type='text'
      value={searchInput}
      placeholder='Search for Movies or Tv Shows'
      onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar;

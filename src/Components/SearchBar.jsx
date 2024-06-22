import React from 'react'
import { useState } from 'react';

const SearchBar = () => {

    const [searchInput, setSearchInput]= useState("");
    const handleChange = (e)=> {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

  return (
    <div>
      <input
      type='text'
      value={searchInput}
      placeholder='Search for Movies'
      onChange={handleChange}
      />
      <button>Search</button>
    </div>
  )
}

export default SearchBar;

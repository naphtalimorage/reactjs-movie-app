import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Film from './Film';
import './SearchReasults.css';
 
const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = "9e405034103c33bc18daf866985f6671";

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      <div className="results-grid">
        {results.map((result) => (
          <Film
            key={result.id}
            filmId={result.id}
            filmTitle={result.title || result.name}
            posterUrl={result.poster_path}
            releaseDate={result.release_date || result.first_air_date}
            rating={result.vote_average}
            alt={result.title || result.name}
            filmtype={result.media_type}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

import { useEffect, useState } from "react";

const useFetchMovies = (endpoint,API_KEY) => {
    const [data, setData]= useState(null);
    const [error , setError]= useState(null);
    const[loading, setLoading]= useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
          setError(null);
          setLoading(true);
          try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${endpoint}?api_key=${API_KEY}`);
            if (!response.ok) {
                throw new Error(`Network response was not ok ${response.status}`);
            }
            const json = await response.json();
              setData(json.results);   
            } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };

        fetchMovies(); 
    }, [endpoint,API_KEY]);

  return {data,error,loading};
};

export default useFetchMovies;
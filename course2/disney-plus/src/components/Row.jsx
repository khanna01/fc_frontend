import { useCallback, useEffect, useState } from 'react'
import axiosInstance from '@/api/axios.js'
import '@/assets/css/Row.css'

export default function Row({ title, id, fetchUrl }) {
  const [movies, setMovies] = useState([])

  const fetchMovies = useCallback(async () => {
    const response = await axiosInstance.get(fetchUrl)
    console.log(response)
    setMovies(response.data.results)
  }, [fetchUrl])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow">{'<'}</span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow">{'>'}</span>
        </div>
      </div>
    </div>
  )
}

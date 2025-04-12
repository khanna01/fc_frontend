import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from '../../api/axios.js'
import '@/pages/SearchPage/SearchPage.css'
import { useDebounce } from '@/hooks/useDebounce.js'

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate()
  // console.log(useLocation())

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  let query = useQuery()
  const searchTerm = query.get('q')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  // console.log(searchTerm)

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`,
      )
      setSearchResults(request.data.results)
      console.log(request)
    } catch (error) {
      console.log(error)
    }
  }

  if (searchResults.length > 0) {
    return (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl =
              'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path
            return (
              <div className="movie" key={movie.id}>
                <div
                  onClick={() => navigate(`/${movie.id}`)}
                  className="movie__column-poster"
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            )
          }
        })}
        <div></div>
      </section>
    )
  } else {
    return (
      <section className="no-results">
        <div className="no-results__text">
          <p>"{searchTerm}" 검색 결과가 없습니다.</p>
        </div>
      </section>
    )
  }
}

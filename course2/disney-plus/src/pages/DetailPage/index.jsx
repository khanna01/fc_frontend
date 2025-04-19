import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from '@/api/axios.js'

export default function DetailPage() {
  const { movieId } = useParams()
  console.log(movieId)
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`)
      setMovie(response.data)
      console.log(response.data)
    }
    fetchData()
  }, [movieId])

  if (!movie) return null
  return (
    <section>
      <img
        className="modal__poster-img"
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : `https://image.tmdb.org/t/p/original${movie.poster_path}`
        }
        alt="modal__poster-img"
      />
    </section>
  )
}

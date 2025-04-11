import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../../api/axios.js'

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([])
  // console.log(useLocation())

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  let query = useQuery()
  const searchTerm = query.get('q')
  // console.log(searchTerm)

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm)
    }
  })

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`,
      )
      setSearchResults(request.data.result)
      console.log(request)
    } catch (error) {
      console.log(error)
    }
  }

  return <div>Search</div>
}

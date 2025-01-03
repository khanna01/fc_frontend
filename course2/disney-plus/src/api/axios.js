import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzczMDE4NGRmM2JlM2VjNTk2NDQwYjY2MWMzNTE0MyIsIm5iZiI6MTczNTI5OTc3OC4zMzIsInN1YiI6IjY3NmU5MmMyNjJiYTMxMGZjMDEyY2EzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5JHlVgoM08EOcbA4qLTtWAicOOGQ1WTHrB6HDnssFiw',
  },
})

export default axiosInstance

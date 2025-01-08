import { useEffect, useState } from 'react'
import axiosInstance from '@/api/axios.js'
import request from '@/api/request.js'

import '../assets/css/Banner.css'
import styled from 'styled-components'

export default function Banner() {
  const [movie, setMovie] = useState({})
  const [isClicked, setClicked] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    // 현재 상영중인 영화 목록 정보 가쟈오기
    const response = await axiosInstance.get(request.fetchNowPlaying)
    // console.log(response)
    // 랜덤한 영화 id 가져오기
    const moveId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id

    // 특정 영화의 상세 정보 가져오기(비디오 포함)
    const { data: movieDetail } = await axiosInstance.get(`movie/${moveId}`, {
      params: { append_to_response: 'videos', language: 'ko' },
    })
    // console.log(movieDetail)
    setMovie(movieDetail)
  }

  const truncate = (str, num) => {
    return str?.length > num ? str.substring(0, num) + '...' : str
  }

  return isClicked ? (
    <>
      <Container>
        <HomeContainer>
          <Iframe
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=false&autoplay=true&mute=true&playlist=${movie.videos.results[0].key}`}
            width="640"
            height="360"
            allow="autoplay; fullscreen"
          ></Iframe>
        </HomeContainer>
      </Container>
      <button className="banner__button" onClick={() => setClicked(false)}>
        X
      </button>
    </>
  ) : (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie.title || movie.original_title}</h1>
        <div className="banner__buttons">
          {movie?.videos?.results[0]?.key && (
            <button
              className="banner__button play"
              onClick={() => setClicked(true)}
            >
              Play
            </button>
          )}
        </div>
        <p className="banner__description">{truncate(movie.overview, 100)}</p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

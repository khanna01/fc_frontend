import { useCallback, useEffect, useState } from 'react'
import axiosInstance from '@/api/axios.js'
import '@/assets/css/Row.css'
import MovieModal from '@/components/Movie-Modal/Movie-Modal.jsx'
import styled from 'styled-components'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function Row({ title, id, fetchUrl }) {
  const [movies, setMovies] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState({})

  const fetchMovies = useCallback(async () => {
    const response = await axiosInstance.get(fetchUrl)
    console.log(response)
    setMovies(response.data.results)
  }, [fetchUrl])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  const handleClick = (movie) => {
    setModalOpen(true)
    setMovieSelected(movie)
  }

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        // 화살표 버튼 사용 유무
        navigation
        // 페이지 버튼 보일지
        pagination={{ clickable: true }}
        // 화면크기마다 보이는 슬라이드 개수 지정
        breakpoints={{
          1378: {
            // 한 번에 보이는 슬라이드 개수
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          // 0 <= 화면 < 625
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        <Content id={id}>
          {movies.map((movie) => (
            <SwiperSlide>
              <Wrap>
                <img
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
                />
              </Wrap>
            </SwiperSlide>
          ))}
        </Content>
      </Swiper>

      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </Container>
  )
}

const Container = styled.div`
  padding: 0 0 26px;
`

const Content = styled.div``

const Wrap = styled.div`
  width: 95%;
  height: 95%;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow:
    rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }
  &:hover {
    box-shadow:
      rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`

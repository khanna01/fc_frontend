import styled from 'styled-components'
import disney_logo from '@/assets/images/viewers-disney.png'
import disney_video from '@/assets/videos/disney.mp4'
import marvel_logo from '@/assets/images/viewers-marvel.png'
import marvel_video from '@/assets/videos/marvel.mp4'
import national_geographic_logo from '@/assets/images/viewers-national.png'
import national_geographic_video from '@/assets/videos/national-geographic.mp4'
import pixar_logo from '@/assets/images/viewers-pixar.png'
import pixar_video from '@/assets/videos/pixar.mp4'
import star_wars_logo from '@/assets/images/viewers-starwars.png'
import star_wars_video from '@/assets/videos/star-wars.mp4'

export default function Category() {
  return (
    <Container>
      <Wrap>
        <img src={disney_logo} alt="disney plus logo" />
        <video autoPlay loop muted>
          <source src={disney_video} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={marvel_logo} alt="disney plus logo" />
        <video autoPlay loop muted>
          <source src={marvel_video} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={national_geographic_logo} alt="disney plus logo" />
        <video autoPlay loop muted>
          <source src={national_geographic_video} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={pixar_logo} alt="disney plus logo" />
        <video autoPlay loop muted>
          <source src={pixar_video} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={star_wars_logo} alt="disney plus logo" />
        <video autoPlay loop muted>
          <source src={star_wars_video} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow:
    rgba(0 0 0 / 69%) 0 26px 30px -10px,
    rgba(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow:
      rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
      transform: scale(1.05);
    }
  }
`

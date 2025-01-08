import './App.css'
import Nav from './components/Nav.jsx'
import styled from 'styled-components'
import bg from '@/assets/images/home-background.png'
import Banner from '@/components/Banner.jsx'
import Category from '@/components/Category.jsx'
import Row from '@/components/Row.jsx'
import request from '@/api/request.js'

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={request.fetchComedyMovies} />
    </Container>
  )
}

export default App

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url(${bg}) center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`

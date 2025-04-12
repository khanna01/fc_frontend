// prettier-ignore
import './App.css'
import styled from 'styled-components'
import request from '@/api/request.js'
import Nav from './components/Nav.jsx'
import bg from '@/assets/images/home-background.png'
import Banner from '@/components/Banner.jsx'
import Category from '@/components/Category.jsx'
import Row from '@/components/Row.jsx'
import { Outlet, Route, Routes } from 'react-router-dom'
import LoginPage from '@/pages/LoginPage/index.jsx'
import DetailPage from '@/pages/DetailPage/index.jsx'
import SearchPage from '@/pages/SearchPage/index.jsx'
import MainPage from '@/pages/MainPage/index.jsx'

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

import styled from 'styled-components'
import { useEffect, useState } from 'react'
import logo from '@/assets/images/logo.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import LoginPage from '@/pages/LoginPage/index.jsx'

export default function Nav() {
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()
  const auth = getAuth()

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    navigate(`/search?q=${e.target.value}`)
  }

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // 유저 정보 저장
        setUserData(result.user)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserData({})
        navigate('/')
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  // 로그인된 상태인지 아닌지 확인하고 해당 페이지로 이동
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user)
      if (user) {
        if (pathname === '/') {
          // 유저가 있고 로그인 페이지일때만 메인 페이지로 이동
          navigate('/main')
        }
      } else {
        // 유저가 없다면 로그인 페이지로 이동
        navigate('/')
      }
    })
  }, [auth, navigate, pathname])

  useEffect(() => {
    // 리스너 등록
    window.addEventListener('scroll', handleScroll)

    // 리스너 해제
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <NavWrapper show={show.toString()}>
      <Logo>
        <img
          alt="Disney Plus Logo"
          src={logo}
          onClick={() => (window.location.href = '/')}
        />
      </Logo>
      {pathname === '/' ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <Input
            value={searchValue}
            onChange={handleChange}
            className="nav__input"
            type="text"
            placeholder="영화를 검색해주세요."
          />
          <SignOut>
            <UserImg src={userData.photoURL} alt={userData.displayName} />
            <DropDown>
              <span onClick={handleSignOut}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${(props) => (props.show ? '#090b13' : 'transparent')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: gray;
    border-color: transparent;
  }
`

const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  background-color: rgba(0, 0, 0, 0.582);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: none;
`
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  white-space: nowrap;
  opacity: 0;
`
const SignOut = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`
const UserImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`

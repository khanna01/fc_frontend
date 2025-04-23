import styled from 'styled-components'
import bg_img from '@/assets/images/login-background.jpg'
import logo_one from '@/assets/images/cta-logo-one.svg'
import logo_two from '@/assets/images/cta-logo-two.png'

export default function LoginPage() {
  return (
    <Container>
      <Content>
        <Center>
          <LogoOne src={logo_one} alt="logo_one" />
          <SignUpLink>지금 가입</SignUpLink>
          <Description>
            영화에 대한 프리미어 액세스를 얻으십시오. 디즈니 플러스 가격은 다음
            주부터 1000원 인상됩니다.
          </Description>
          <LogoTwo src={logo_two} alt="logo_two" />
        </Center>
        <BgImage />
      </Content>
    </Container>
  )
}

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
`
const Content = styled.div`
  width: 100%;
  margin-bottom: 10vw;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`

const Center = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const LogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`

const SignUpLink = styled.a`
  width: 100%;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.5px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`

const Description = styled.span`
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`

const LogoTwo = styled.img`
  width: 100%;
  max-width: 600px;
  display: inline-block;
  margin-bottom: 20px;
  vertical-align: bottom;
`

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-image: url(${bg_img});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`

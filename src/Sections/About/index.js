import styled, { keyframes } from 'styled-components'
import wave from '../../assets/waves.svg'
import logo from '../../assets/logo_header.png'
import human from '../../assets/human.svg'
import hand from '../../assets/hand.svg'

const move = keyframes`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(0px) translateX(20px)        }
    100% { transform: translateY(-10px)         }
`

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`
const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`

const Title = styled.h1`
  margin-top: 20px;
  font-size: 2rem;
  display: inline-block;
`

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--green);
  border-color: var(--green) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`

const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`
const Text = styled.h4`
  font-size: calc(0.3rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
  margin-bottom: 10px;
`
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`

const About = () => {
  return (
    <AboutSection id="about">
      {/* <Waves src={wave} alt="" /> */}
      <Hand>
        <img src={hand} alt="" />
      </Hand>
      <Main>
        <div>
          <Title>О нас</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={logo} alt="" width="400" height="400" />
          </Rocket>
          <AboutText>
            <Human>
              <img src={human} alt="" width="400" height="400" />
            </Human>

            <Text>
              Мы занимаемся дистрибьюцией продуктов питания с 2009 года. Специализируемся на
              поставке высококачественных продуктов без химических добавок и усилителей вкуса.
            </Text>
            <Text>На текущем этапе — активно развиваемся по всей территории РФ.</Text>
            <Text>
              У нас собственные система логистики, отдел продаж традиционной розницы, склады и
              автопарк.
            </Text>
            <div>
              <Circle style={{ backgroundColor: 'var(--green)' }} />
              <Circle style={{ backgroundColor: 'rgb(199 199 199)' }} />
              <Circle style={{ backgroundColor: 'var(--black)' }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  )
}

export default About

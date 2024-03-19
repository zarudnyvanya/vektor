import styled from 'styled-components'

const CARD = styled.div`
  height: calc(8rem + 12vw);
  width: 380px;
  background-color: var(--nav2);
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 320px) and (max-width: 450px) {
    padding-top: 30px;
    width: 180px;
  }

  @media (min-width: 451px) and (max-width: 810px) {
    padding-top: 40px;
    width: 220px;
  }

  @media (min-width: 810px) and (max-width: 1350px) {
    padding-top: 20px;
  }
`

const Image = styled.div`
  width: 34%;
  height: 34%;
  position: absolute;
  left: 50%;
  bottom: 80%;
  transform: translate(-50%);
  border-radius: 50%;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  // background-position: top;
  filter: drop-shadow(0px -3px 3px var(--green));
`

const TEXT = styled.ul`
  color: var(--white);
  padding: 5px calc(1rem + 1vw);
  height: 100px;
  // text-align: center;
  font-size: calc(0.6rem + 0.4vw);

  li {
    margin-bottom: 10px;
  }

  @media (min-width: 320px) and (max-width: 450px) {
    li {
      margin-bottom: 5px;
    }
  }

  @media (min-width: 451px) and (max-width: 810px) {
    li {
      margin-bottom: 5px;
    }
  }
`

const NAME = styled.h3`
  // color: var(--pink);
  color: #5dc15d;
  padding-top: 4rem;
  font-size: calc(0.5rem + 1vw);

  @media (min-width: 320px) and (max-width: 450px) {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  @media (min-width: 451px) and (max-width: 810px) {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  @media (min-width: 810px) and (max-width: 1350px) {
    padding-top: 2rem;
  }

  @media (min-width: 2200px) {
    padding-top: 7rem;
  }
`

const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.png`)

  return (
    <CARD>
      <Image img={Avatar} width="400" height="400" />
      <TEXT>{text}</TEXT>
      <NAME>{name}</NAME>
    </CARD>
  )
}

export default Card

import elica from './../../assets/Elica.png'
import ceasar from './../../assets/Ceasar.png'
import chernogolovka from './../../assets/Chernogolovka.png'
import frutmotiv from './../../assets/frutmotiv.png'
import negresko from './../../assets/negresko.png'
import rusko from './../../assets/RusKo.png'
import holod from './../../assets/Holod.png'
import shinline from './../../assets/ShinLine.png'
import corova from './../../assets/Bodraya_korova.png'
import vek from './../../assets/Vektor_vvkusa.png'
import hladonezh from './../../assets/Hladonezh.png'
import pechagin from './../../assets/Pechagin.png'
import tchibo from './../../assets/Tchibo.png'
import pechenyush from './../../assets/pechenyush.png'
import alidan from './../../assets/alidan.png'

import { IoIosArrowDown } from 'react-icons/io'

import styled from 'styled-components'
import { useState } from 'react'

const companies = [
  elica,
  ceasar,
  chernogolovka,
  frutmotiv,
  negresko,
  rusko,
  holod,
  shinline,
  corova,
  vek,
  hladonezh,
  pechagin,
  tchibo,
  pechenyush,
  alidan,
]

const CatalogSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 100px;
  // background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-height: 100%;
  transition: all 0.5s ease;

  img {
    width: 200px;
    height: 200px;
  }
`

const Icon = styled.span`
  transform: rotate(180deg);
`

const Title = styled.h1`
  color: var(--black);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 4rem;
  position: relative;
  cursor: pointer;
  &::before {
    content: '';
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--green);
  }
`

const Catalog = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleCatalog = () => {
    setIsOpen((open) => !open)
  }

  return (
    <CatalogSection id="catalog">
      <Title onClick={toggleCatalog}>
        Каталог{' '}
        <IoIosArrowDown
          rotate={180}
          style={{
            height: 20,
            width: 20,
            transition: 'all .5s ease',
            transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
          }}
          color="black"
        />
      </Title>

      <List style={isOpen ? { display: 'flex' } : { opacity: 0, maxHeight: '0px' }}>
        {companies.map((company) => {
          return (
            <a href="#">
              <img
                style={isOpen ? {} : { transition: 'all .5s ease', height: '0px' }}
                src={company}
                alt="company"
              />
            </a>
          )
        })}
      </List>
    </CatalogSection>
  )
}

export default Catalog

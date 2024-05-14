import styled from 'styled-components'
import { ProgressiveImage } from '../ProgressiveImage'
import placeholderImageSrc from './../../assets/imagePlaceholder.jpg'

import burger1 from './../../assets/food/Гамбургер с говяжьей котлетой (1).jpg'
import burger2 from './../../assets/food/Гамбургер с говяжьей котлетой (2).jpg'
import burger3 from './../../assets/food/Гамбургер с говяжьей котлетой (3).jpg'
import burger4 from './../../assets/food/Гамбургер с говяжьей котлетой (4).jpg'
import burger5 from './../../assets/food/Гамбургер с говяжьей котлетой (5).jpg'
import burger6 from './../../assets/food/Гамбургер с говяжьей котлетой (6).jpg'

import pizzaMeat1 from './../../assets/food/Пицца мясное ассорти с шампиньонами (1).jpg'
import pizzaMeat2 from './../../assets/food/Пицца мясное ассорти с шампиньонами (2).jpg'
import pizzaMeat3 from './../../assets/food/Пицца мясное ассорти с шампиньонами (3).jpg'
import pizzaMeat4 from './../../assets/food/Пицца мясное ассорти с шампиньонами (4).jpg'
import pizzaMeat5 from './../../assets/food/Пицца мясное ассорти с шампиньонами (5).jpg'
import pizzaMeat6 from './../../assets/food/Пицца мясное ассорти с шампиньонами (6).jpg'

import pizzaFile1 from './../../assets/food/Пицца с куриным филе и шампиньонами (1).jpg'
import pizzaFile2 from './../../assets/food/Пицца с куриным филе и шампиньонами (2).jpg'
import pizzaFile3 from './../../assets/food/Пицца с куриным филе и шампиньонами (3).jpg'
import pizzaFile4 from './../../assets/food/Пицца с куриным филе и шампиньонами (4).jpg'
import pizzaFile5 from './../../assets/food/Пицца с куриным филе и шампиньонами (5).jpg'
import pizzaFile6 from './../../assets/food/Пицца с куриным филе и шампиньонами (6).jpg'

import pizzaKur1 from './../../assets/food/Пицца с курицей и грибами (1).jpg'
import pizzaKur2 from './../../assets/food/Пицца с курицей и грибами (2).jpg'
import pizzaKur3 from './../../assets/food/Пицца с курицей и грибами (3).jpg'
import pizzaKur4 from './../../assets/food/Пицца с курицей и грибами (4).jpg'
import pizzaKur5 from './../../assets/food/Пицца с курицей и грибами (5).jpg'
import pizzaKur6 from './../../assets/food/Пицца с курицей и грибами (6).jpg'

import varenik1 from './../../assets/food/Вареники с творогом (1).jpg'
import varenik2 from './../../assets/food/Вареники с творогом (2).jpg'
import varenik3 from './../../assets/food/Вареники с творогом (3).jpg'

import kebab1 from './../../assets/food/Люля-кебаб (1).jpg'
import kebab2 from './../../assets/food/Люля-кебаб (2).jpg'
import kebab3 from './../../assets/food/Люля-кебаб (3).jpg'
import kebab4 from './../../assets/food/Люля-кебаб (4).jpg'
import kebab5 from './../../assets/food/Люля-кебаб (5).jpg'
import kebab6 from './../../assets/food/Люля-кебаб (6).jpg'
import kebab7 from './../../assets/food/Люля-кебаб (7).jpg'
import kebab8 from './../../assets/food/Люля-кебаб (8).jpg'

const burgersList = [
  {
    name: 'Гамбургер с говяжьей котлетой (1)',
    img: burger1,
  },
  {
    name: 'Гамбургер с говяжьей котлетой (2)',
    img: burger2,
  },
  {
    name: 'Гамбургер с говяжьей котлетой (3)',
    img: burger3,
  },
  {
    name: 'Гамбургер с говяжьей котлетой (4)',
    img: burger4,
  },
  {
    name: 'Гамбургер с говяжьей котлетой (5)',
    img: burger5,
  },
  {
    name: 'Гамбургер с говяжьей котлетой (6)',
    img: burger6,
  },
]

const pizzasList = [
  {
    name: 'Пицца мясное ассорти с шампиньонами (1)',
    img: pizzaMeat1,
  },
  {
    name: 'Пицца мясное ассорти с шампиньонами (2)',
    img: pizzaMeat2,
  },
  {
    name: 'Пицца мясное ассорти с шампиньонами (3)',
    img: pizzaMeat3,
  },
  {
    name: 'Пицца мясное ассорти с шампиньонами (4)',
    img: pizzaMeat4,
  },
  {
    name: 'Пицца мясное ассорти с шампиньонами (5)',
    img: pizzaMeat5,
  },
  {
    name: 'Пицца мясное ассорти с шампиньонами (6)',
    img: pizzaMeat6,
  },
  {
    name: 'Пицца с куриным филе и шампиньонами (1)',
    img: pizzaFile1,
  },
  {
    name: 'Пицца с куриным филе и шампиньонами (2)',
    img: pizzaFile2,
  },
  {
    name: 'Пицца с куриным филе и шампиньонами (3)',
    img: pizzaFile3,
  },
  {
    name: 'Пицца с куриным филе и шампиньонами (4)',
    img: pizzaFile4,
  },
  {
    name: 'Пицца с куриным филе и шампиньонами (5)',
    img: pizzaFile5,
  },
  {
    name: 'Пицца с куриным филе и шампиньонами (6)',
    img: pizzaFile6,
  },
  {
    name: 'Пицца с курицей и грибами (1)',
    img: pizzaKur1,
  },
  {
    name: 'Пицца с курицей и грибами (2)',
    img: pizzaKur2,
  },
  {
    name: 'Пицца с курицей и грибами (3)',
    img: pizzaKur3,
  },
  {
    name: 'Пицца с курицей и грибами (4)',
    img: pizzaKur4,
  },
  {
    name: 'Пицца с курицей и грибами (5)',
    img: pizzaKur5,
  },
  {
    name: 'Пицца с курицей и грибами (6)',
    img: pizzaKur6,
  },
]

const varenikiList = [
  {
    name: 'Вареники с творогом (1)',
    img: varenik1,
  },
  {
    name: 'Вареники с творогом (2)',
    img: varenik2,
  },
  {
    name: 'Вареники с творогом (3)',
    img: varenik3,
  },
]

const meatsList = [
  {
    name: 'Люля-кебаб (1)',
    img: kebab1,
  },
  {
    name: 'Люля-кебаб (2)',
    img: kebab2,
  },
  {
    name: 'Люля-кебаб (3)',
    img: kebab3,
  },
  {
    name: 'Люля-кебаб (4)',
    img: kebab4,
  },
  {
    name: 'Люля-кебаб (5)',
    img: kebab5,
  },
  {
    name: 'Люля-кебаб (6)',
    img: kebab6,
  },
  {
    name: 'Люля-кебаб (7)',
    img: kebab7,
  },
  {
    name: 'Люля-кебаб (8)',
    img: kebab8,
  },
]

const oilList = [
  {
    name: 'eda',
    img: './29.jpg',
  },
  {
    name: 'eda',
    img: './30.jpg',
  },
  {
    name: 'eda',
    img: './31.jpg',
  },
  {
    name: 'eda',
    img: './32.jpg',
  },
]

const categoriesList = [
  { title: 'Бургеры', category: burgersList },
  { title: 'Пицца', category: pizzasList },
  { title: 'Вареники', category: varenikiList },
  { title: 'Мясные изделия', category: meatsList },
  { title: 'Масло', category: oilList },
]

const Container = styled.div`
  padding: 1rem 5rem;

  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`

const Title = styled.h1`
  margin-bottom: 20px;
`
const FoodList = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 60px;
  row-gap: 40px;
`

const FoodImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 200px;
  border-radius: 5px;
  object-fit: cover;
  transform: scale(1);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.5);
    transition: all 0.5s;
    cursor: pointer;
  }
`
const ImgName = styled.p`
  margin-top: 10px;
`

const Food = () => {
  return (
    <Container id="home">
      <Title>Каталог продуктов:</Title>

      {categoriesList.map((obj) => {
        return (
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 20 }}>{obj.title}</h2>
            <FoodList>
              {obj.category.map((food) => {
                return (
                  <div style={{ width: 300 }}>
                    <div style={{ height: 200, overflow: 'hidden' }}>
                      <ProgressiveImage
                        loading="lazy"
                        src={food.img}
                        placeholderSrc={placeholderImageSrc}
                        alt={food.name}
                      />
                      {/* <FoodImage loading="lazy" src={food.img} alt="Еда" /> */}
                    </div>
                    <ImgName>{food.name}</ImgName>
                  </div>
                )
              })}
            </FoodList>
          </div>
        )
      })}
    </Container>
  )
}

export default Food

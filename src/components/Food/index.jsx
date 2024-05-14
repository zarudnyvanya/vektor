import styled from 'styled-components'
import { ProgressiveImage } from '../ProgressiveImage'
import placeholderImageSrc from './../../assets/imagePlaceholder.jpg'

const burgersList = [
  {
    name: 'Гамбургер с говяжьей котлетой (1)',
    img: './Гамбургер с говяжьей котлетой (1).jpg',
  },
  {
    name: 'Гамбургер с говяжьей котлетой (2)',
    img: './Гамбургер с говяжьей котлетой (2).jpg',
  },
  {
    name: 'Гамбургер с говяжьей котлетой (3)',
    img: './Гамбургер с говяжьей котлетой (3).jpg',
  },
  {
    name: 'Гамбургер с говяжьей котлетой (4)',
    img: './Гамбургер с говяжьей котлетой (4).jpg',
  },
  {
    name: 'Гамбургер с говяжьей котлетой (5)',
    img: './Гамбургер с говяжьей котлетой (5).jpg',
  },
  {
    name: 'Гамбургер с говяжьей котлетой (6)',
    img: './Гамбургер с говяжьей котлетой (6).jpg',
  },
]

const pizzasList = [
  {
    name: 'Пицца мясное ассорти с шампиньонами (1)',
    img: './Пицца мясное ассорти с шампиньонами (1).jpg',
  },
  {
    name: 'Пицца мясное ассорти с шампиньонами (2)',
    img: './Пицца мясное ассорти с шампиньонами (2).jpg',
  },
  {
    name: 'Пицца мясное ассорти с шампиньонами (3)',
    img: './Пицца мясное ассорти с шампиньонами (3).jpg',
  },
  {
    name: 'Пицца мясное ассорти с шампиньонами (4)',
    img: './Пицца мясное ассорти с шампиньонами (4).jpg',
  },
  {
    name: 'Пицца мясное ассорти с шампиньонами (5)',
    img: './Пицца мясное ассорти с шампиньонами (5).jpg',
  },
  {
    name: 'Пицца мясное ассорти с шампиньонами (6)',
    img: './Пицца мясное ассорти с шампиньонами (6).jpg',
  },
  {
    name: 'Пицца с куриным филе и шампиньонами (1)',
    img: './Пицца с куриным филе и шампиньонами (1).jpg',
  },
  {
    name: 'Пицца с куриным филе и шампиньонами (2)',
    img: './Пицца с куриным филе и шампиньонами (2).jpg',
  },
  {
    name: 'Пицца с куриным филе и шампиньонами (3)',
    img: './Пицца с куриным филе и шампиньонами (3).jpg',
  },
  {
    name: 'Пицца с куриным филе и шампиньонами (4)',
    img: './Пицца с куриным филе и шампиньонами (4).jpg',
  },
  {
    name: 'Пицца с куриным филе и шампиньонами (5)',
    img: './Пицца с куриным филе и шампиньонами (5).jpg',
  },
  {
    name: 'Пицца с куриным филе и шампиньонами (6)',
    img: './Пицца с куриным филе и шампиньонами (6).jpg',
  },
  {
    name: 'Пицца с курицей и грибами (1)',
    img: './Пицца с курицей и грибами (1).jpg',
  },
  {
    name: 'Пицца с курицей и грибами (2)',
    img: './Пицца с курицей и грибами (2).jpg',
  },
  {
    name: 'Пицца с курицей и грибами (3)',
    img: './Пицца с курицей и грибами (3).jpg',
  },
  {
    name: 'Пицца с курицей и грибами (4)',
    img: './Пицца с курицей и грибами (4).jpg',
  },
  {
    name: 'Пицца с курицей и грибами (5)',
    img: './Пицца с курицей и грибами (5).jpg',
  },
  {
    name: 'Пицца с курицей и грибами (6)',
    img: './Пицца с курицей и грибами (6).jpg',
  },
]

const varenikiList = [
  {
    name: 'Вареники с творогом (1)',
    img: './Вареники с творогом (1).jpg',
  },
  {
    name: 'Вареники с творогом (2)',
    img: './Вареники с творогом (2).jpg',
  },
  {
    name: 'Вареники с творогом (3)',
    img: './Вареники с творогом (3).jpg',
  },
]

const meatsList = [
  {
    name: 'Люля-кебаб (1)',
    img: './Люля-кебаб (1).jpg',
  },
  {
    name: 'Люля-кебаб (2)',
    img: './Люля-кебаб (2).jpg',
  },
  {
    name: 'Люля-кебаб (3)',
    img: './Люля-кебаб (3).jpg',
  },
  {
    name: 'Люля-кебаб (4)',
    img: './Люля-кебаб (4).jpg',
  },
  {
    name: 'Люля-кебаб (5)',
    img: './Люля-кебаб (5).jpg',
  },
  {
    name: 'Люля-кебаб (6)',
    img: './Люля-кебаб (6).jpg',
  },
  {
    name: 'Люля-кебаб (7)',
    img: './Люля-кебаб (7).jpg',
  },
  {
    name: 'Люля-кебаб (8)',
    img: './Люля-кебаб (8).jpg',
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

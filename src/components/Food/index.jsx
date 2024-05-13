import styled from 'styled-components'
import food1 from './../../assets/food/1.jpg'
import food2 from './../../assets/food/2.jpg'
import food3 from './../../assets/food/3.jpg'
import food4 from './../../assets/food/4.jpg'
import food5 from './../../assets/food/5.jpg'
import food6 from './../../assets/food/6.jpg'
import food7 from './../../assets/food/7.jpg'
import food8 from './../../assets/food/8.jpg'
import food9 from './../../assets/food/9.jpg'
import food10 from './../../assets/food/10.jpg'
import food11 from './../../assets/food/11.jpg'
import food12 from './../../assets/food/12.jpg'
import food13 from './../../assets/food/13.jpg'
import food14 from './../../assets/food/14.jpg'
import food15 from './../../assets/food/15.jpg'
import food16 from './../../assets/food/16.jpg'
import food17 from './../../assets/food/17.jpg'
import food18 from './../../assets/food/18.jpg'
import food19 from './../../assets/food/19.jpg'
import food20 from './../../assets/food/20.jpg'
import food21 from './../../assets/food/21.jpg'
import food22 from './../../assets/food/22.jpg'
import food23 from './../../assets/food/23.jpg'
import food24 from './../../assets/food/24.jpg'
import food25 from './../../assets/food/25.jpg'
import food26 from './../../assets/food/26.jpg'
import food27 from './../../assets/food/27.jpg'
import food28 from './../../assets/food/28.jpg'
import food29 from './../../assets/food/29.jpg'
import food30 from './../../assets/food/30.jpg'
import food31 from './../../assets/food/31.jpg'
import food32 from './../../assets/food/32.jpg'
import food33 from './../../assets/food/33.jpg'
import food34 from './../../assets/food/34.jpg'
import food35 from './../../assets/food/35.jpg'
import food36 from './../../assets/food/36.jpg'
import food37 from './../../assets/food/37.jpg'
import food38 from './../../assets/food/38.jpg'
import food39 from './../../assets/food/39.jpg'

const foodList = [
  {
    name: 'eda',
    img: food33,
  },
  {
    name: 'eda',
    img: food34,
  },
  {
    name: 'eda',
    img: food35,
  },
  {
    name: 'eda',
    img: food36,
  },
  {
    name: 'eda',
    img: food37,
  },
  {
    name: 'eda',
    img: food38,
  },
  {
    name: 'eda',
    img: food39,
  },
]

const burgersList = [
  {
    name: 'гамбургер',
    img: food4,
  },
  {
    name: 'гамбургер',
    img: food5,
  },
  {
    name: 'гамбургер',
    img: food6,
  },
  {
    name: 'гамбургер',
    img: food7,
  },
  {
    name: 'гамбургер',
    img: food8,
  },
  {
    name: 'гамбургер',
    img: food9,
  },
]

const pizzasList = [
  {
    name: 'eda',
    img: food11,
  },
  {
    name: 'eda',
    img: food12,
  },
  {
    name: 'eda',
    img: food13,
  },
  {
    name: 'eda',
    img: food14,
  },
  {
    name: 'eda',
    img: food15,
  },
  {
    name: 'eda',
    img: food16,
  },
  {
    name: 'eda',
    img: food17,
  },
  {
    name: 'eda',
    img: food18,
  },
  {
    name: 'eda',
    img: food19,
  },
  {
    name: 'eda',
    img: food20,
  },
  {
    name: 'eda',
    img: food21,
  },
  {
    name: 'eda',
    img: food22,
  },
  {
    name: 'eda',
    img: food23,
  },
  {
    name: 'eda',
    img: food24,
  },
  {
    name: 'eda',
    img: food25,
  },
  {
    name: 'eda',
    img: food26,
  },
  {
    name: 'eda',
    img: food27,
  },
  {
    name: 'eda',
    img: food28,
  },
]

const varenikiList = [
  {
    name: 'eda',
    img: food1,
  },
  {
    name: 'eda',
    img: food2,
  },
  {
    name: 'eda',
    img: food3,
  },
]

const meatsList = [
  {
    name: 'eda',
    img: food10,
  },
  {
    name: 'eda',
    img: food33,
  },
  {
    name: 'eda',
    img: food34,
  },
  {
    name: 'eda',
    img: food35,
  },
  {
    name: 'eda',
    img: food36,
  },
  {
    name: 'eda',
    img: food37,
  },
  {
    name: 'eda',
    img: food38,
  },
  {
    name: 'eda',
    img: food39,
  },
]

const oilList = [
  {
    name: 'eda',
    img: food29,
  },
  {
    name: 'eda',
    img: food30,
  },
  {
    name: 'eda',
    img: food31,
  },
  {
    name: 'eda',
    img: food32,
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
                    <FoodImage src={food.img} alt="Еда" />
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

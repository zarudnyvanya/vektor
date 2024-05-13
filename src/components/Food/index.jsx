import styled from 'styled-components'

const burgersList = [
  {
    name: 'гамбургер',
    img: './4.jpg',
  },
  {
    name: 'гамбургер',
    img: './5.jpg',
  },
  {
    name: 'гамбургер',
    img: './6.jpg',
  },
  {
    name: 'гамбургер',
    img: './7.jpg',
  },
  {
    name: 'гамбургер',
    img: './8.jpg',
  },
  {
    name: 'гамбургер',
    img: './9.jpg',
  },
]

const pizzasList = [
  {
    name: 'eda',
    img: './11.jpg',
  },
  {
    name: 'eda',
    img: './12.jpg',
  },
  {
    name: 'eda',
    img: './13.jpg',
  },
  {
    name: 'eda',
    img: './14.jpg',
  },
  {
    name: 'eda',
    img: './15.jpg',
  },
  {
    name: 'eda',
    img: './16.jpg',
  },
  {
    name: 'eda',
    img: './17.jpg',
  },
  {
    name: 'eda',
    img: './18.jpg',
  },
  {
    name: 'eda',
    img: './19.jpg',
  },
  {
    name: 'eda',
    img: './20.jpg',
  },
  {
    name: 'eda',
    img: './21.jpg',
  },
  {
    name: 'eda',
    img: './22.jpg',
  },
  {
    name: 'eda',
    img: './23.jpg',
  },
  {
    name: 'eda',
    img: './24.jpg',
  },
  {
    name: 'eda',
    img: './25.jpg',
  },
  {
    name: 'eda',
    img: './26.jpg',
  },
  {
    name: 'eda',
    img: './27.jpg',
  },
  {
    name: 'eda',
    img: './28.jpg',
  },
]

const varenikiList = [
  {
    name: 'eda',
    img: './1.jpg',
  },
  {
    name: 'eda',
    img: './2.jpg',
  },
  {
    name: 'eda',
    img: './3.jpg',
  },
]

const meatsList = [
  {
    name: 'eda',
    img: './10.jpg',
  },
  {
    name: 'eda',
    img: './33.jpg',
  },
  {
    name: 'eda',
    img: './34.jpg',
  },
  {
    name: 'eda',
    img: './35.jpg',
  },
  {
    name: 'eda',
    img: './36.jpg',
  },
  {
    name: 'eda',
    img: './37.jpg',
  },
  {
    name: 'eda',
    img: './38.jpg',
  },
  {
    name: 'eda',
    img: './39.jpg',
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
                      <FoodImage loading="lazy" src={food.img} alt="Еда" />
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

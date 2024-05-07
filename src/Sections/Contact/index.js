import styled from 'styled-components'

const ContactSection = styled.div`
  padding: calc(2.5rem + 2.5vw) 0;
`

const Title = styled.h1`
  text-align: center;
  color: var(--black);
  // display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: '';
    height: 1px;
    width: 25%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--green);
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-left: 33%;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    margin-left: 20%;
    font-size: 10px;
  }

  @media screen and (min-width: 2000px) {
    margin-left: 44%;
    font-size: 10px;
  }

  a {
    color: #01681f;
    font-size: 30px;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }

    @media screen and (max-width: 400px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 24px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }

    @media screen and (max-width: 400px) {
      font-size: 12px;
    }
  }
`

const Contact = () => {
  return (
    <ContactSection style={{ width: '100%' }} id="contact">
      <Title>Контакты</Title>

      <div style={{}}>
        <Row>
          <a href="tel:88632850569">8 (863) 285-05-69 </a>
          <p>- многоканальный офис</p>
        </Row>
        <Row>
          <a href="tel:88632800508">8 (863) 280-05-08 </a>
          <p>- бухгалтерия, факс</p>
        </Row>
        <Row>
          <p>Электронный адрес:</p>
          <a href="mail:vektor-sb@ya.ru">vektor-sb@ya.ru</a>
        </Row>

        <Row>
          <p>Фактический адрес: г. Ростов-на-Дону, пер. Изыскательский, 5Б</p>
        </Row>
      </div>

      <div
        style={{ width: '100%', padding: '20px 60px' }}
        class="relative overflow-hidden w-full rounded-md mb-8"
      >
        <a
          href="https://yandex.ru/maps/39/rostov-na-donu/?utm_medium=mapframe&utm_source=maps"
          style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: 0 }}
        >
          Ростов‑на‑Дону
        </a>
        <a
          href="https://yandex.ru/maps/39/rostov-na-donu/house/izyskatelskiy_pereulok_5b/Z0AYcA9pQEQDQFptfX52d3pmbA==/?ll=39.689914%2C47.276658&utm_medium=mapframe&utm_source=maps&z=16.89"
          style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
        >
          Изыскательский переулок, 5Б — Яндекс Карты
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=39.689914%2C47.276658&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzMwNjE5NBJc0KDQvtGB0YHQuNGPLCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0JjQt9GL0YHQutCw0YLQtdC70YzRgdC60LjQuSDQv9C10YDQtdGD0LvQvtC6LCA10JEiCg14wh5CFUwbPUI%2C&z=16.89"
          width="100%"
          height="400"
          allowfullscreen=""
          style={{ position: 'relative' }}
        ></iframe>
      </div>
    </ContactSection>
  )
}

export default Contact

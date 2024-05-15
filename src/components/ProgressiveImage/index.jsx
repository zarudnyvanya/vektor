import styled from 'styled-components'

import placeholderImageSrc from './../../assets/imagePlaceholder.jpg'

const FoodImage = styled.img`
  position: relative;
  display: block;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  object-fit: cover;
  transform: scale(1);
  transition: all 0.3s;
  z-index: 2;

  &:hover {
    transform: scale(1.5);
    transition: all 0.5s ease;
    cursor: pointer;
  }
`

export const ProgressiveImage = ({ src, placeholderSrc, loading, alt }) => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          backgroundColor: 'gray',
          backgroundImage: `url(${placeholderImageSrc})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'blur(6px)',
        }}
      ></div>
      <FoodImage width={300} height={200} loading="lazy" src={src} alt={alt} />
    </div>
  )
}

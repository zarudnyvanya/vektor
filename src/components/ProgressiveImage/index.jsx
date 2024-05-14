import { useEffect, useState } from 'react'
import styled from 'styled-components'

const FoodImage = styled.img`
  display: block;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  object-fit: cover;
  transform: scale(1);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.5);
    transition: all 0.5s ease;
    cursor: pointer;
  }
`

export const ProgressiveImage = ({ src, placeholderSrc, loading, alt }) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImageSrc(src)
    }
  }, [])

  return (
    <FoodImage
      style={
        imageSrc === placeholderSrc
          ? { filter: 'blur(10px)', width: 300, height: 200 }
          : { filter: 'blur(0)', width: 300, height: 200 }
      }
      src={imageSrc}
      loading={loading}
      alt={alt}
    />
  )
}

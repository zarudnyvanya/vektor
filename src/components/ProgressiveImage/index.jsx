import { useEffect, useState } from 'react'
import styled from 'styled-components'

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
  }, [src])

  return (
    <FoodImage
      style={imageSrc === placeholderSrc ? { filter: 'blur(10px)' } : { filter: 'blur(0)' }}
      loading={loading}
      src={imageSrc}
      alt={alt}
    />
  )
}

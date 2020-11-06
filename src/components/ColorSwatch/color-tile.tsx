import React from 'react'
import styled from 'styled-components'

const makePixels = ({ size }: { size: number }): string => `${size}px`

const Square = styled.div<{ size: number, borderColor?: string }>`
  width: ${makePixels};
  height: ${makePixels};
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
`

const ValidColorSquare = styled(Square)<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor };
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.04);
  }
`

const InvalidColorSquare = styled(Square)`
  display: flex;
  align-items: center;
  padding: 8px;

  span {
    color: red;
    text-align: center;
  }
`

const isValidColorString = (str: string): boolean => {
  const s = new Option().style
  s.color = str
  return s.color !== ''
}

export interface ColorTileProps {
  size: number
  borderColor: string
  color: string
}

const ColorTile:  React.FC<ColorTileProps> = ({ color, borderColor, size }) => {
  if (isValidColorString(color)) {
    return <ValidColorSquare size={size} borderColor={borderColor} backgroundColor={color} />
  } else {
    return (
      <InvalidColorSquare size={size} borderColor={borderColor}>
        <span>{`${color} is not a valid color!`}</span>
      </InvalidColorSquare>
    )
  }
}

export default ColorTile
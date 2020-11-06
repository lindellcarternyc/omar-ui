import React from 'react'
import styled from 'styled-components'

import ColorTile from './color-tile'

const SWATCH_SIZE = 112
const SQUARE_SIZE = 96

const ColorSwatchWrapper = styled.div`
  width: ${SWATCH_SIZE}px;
  border: 1px solid black;
  /* padding: 9px; */
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;

  .color-title {
    /* margin: 0; */
    font-weight: normal;
    margin-bottom: 8px;
    /* border: 1px solid green; */
    width: 100%;
    /* border-bottom: 1px solid; */
    text-align: center;
  }

  .color-label {
    margin: 0;
    margin-top: 8px;
  }
`

interface ColorSwatchProps {
  title?: string
  color: string
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ title, color }) => {
  return (
    <ColorSwatchWrapper>
      {title && (
        <h4 className="color-title">{title}</h4>
      )}
      <ColorTile size={SQUARE_SIZE} color={color} borderColor="gray" />
      <p className="color-label">{color}</p>
    </ColorSwatchWrapper>
  )
}

export default ColorSwatch
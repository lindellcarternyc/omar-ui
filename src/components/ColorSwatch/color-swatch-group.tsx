import React from 'react'
import styled from 'styled-components'
import ColorSwatch from './color-swatch'

export interface ColorSwatchGroupProps {
  title?: string
  colors: { title: string, value: string }[]
}

const ColorSwatchGroupWrapper = styled.div`
  border: 1px solid black;
  padding: 8px;
  position: relative;

  h2 {
    font-weight: normal;
    width: 100%;
    text-align: center;
    margin-bottom: 16px;
  }

  .color-group {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    & > div {
      margin-bottom: 16px;
    }
  }
`

const ColorSwatchGroup: React.FC<ColorSwatchGroupProps> = ({ title, colors }) => {
  return (
    <ColorSwatchGroupWrapper>
      <h2>{title}</h2>
      <div className="color-group">
        {colors.map(color => (
          <ColorSwatch title={color.title} color={color.value} />
        ))}
      </div>
    </ColorSwatchGroupWrapper>
  )
}

export default ColorSwatchGroup
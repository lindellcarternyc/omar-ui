import React from 'react'
import styled from 'styled-components'
import * as Colors from '../constants/colors'

interface ButtonColor {
  default: string
  accent: string
  disabled: string
}

const shadeToButtonColor = (shade: Colors.Shade): ButtonColor => {
  return {
    default: shade.medium,
    accent: shade.light,
    disabled: shade.dark
  }
}

interface StyledButtonProps {
  disabled?: boolean
  backgroundColor: ButtonColor
  textColor: ButtonColor
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;

  cursor: pointer;

  color: ${({ textColor }) => {
    return textColor.default
  }};

  background-color: ${({ backgroundColor, disabled }) => {
    if (disabled) return backgroundColor.disabled
    return backgroundColor.default
  }};

  text-transform: uppercase;
  line-height: 1rem;

  &:hover, &:focus {
    background-color: ${({ backgroundColor, disabled }) => {
      if (disabled) return backgroundColor.disabled
      return backgroundColor.accent
    }};
  }
`

export interface ButtonProps {
  text?: string
  children?: string
  disabled?: boolean
  color?: Colors.ColorKey
}

const ShadeMap: Readonly<{[K in Colors.ColorKey]: Colors.Shade }> = {
  gray: Colors.GrayShade,
  blue: Colors.MediumBlueShade,
  yellow: Colors.YellowShade,
  red: Colors.RedShade,
  darkblue: Colors.DarkBlueShade,
  green: Colors.GreenShade
}

const backgroundFromColorName = (colorName: Colors.ColorKey): ButtonColor => {
  return shadeToButtonColor(ShadeMap[colorName])
}

const textColorFromColorName = (colorName: Colors.ColorKey): ButtonColor => {
  switch (colorName) {
    case 'gray': {
      return shadeToButtonColor(Colors.BlackShade)
    }
    default: {
      return shadeToButtonColor(Colors.WhiteShade)
    }
  }
}

export const Button: React.FC<ButtonProps> = ({ text, children, disabled, color }) => {
  const backgroundColor = backgroundFromColorName(color || 'gray')
  const textColor = textColorFromColorName(color || 'gray')

  return (
    <StyledButton 
      backgroundColor={backgroundColor}
      textColor={textColor}
      disabled={disabled}
    >
      {text || children || 'button'}
    </StyledButton>
  )
}
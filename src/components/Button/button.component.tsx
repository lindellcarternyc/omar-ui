import React from 'react'
import styled from 'styled-components'
import * as Colors from '../constants/colors'
import * as ButtonColorUtils from './button.color.utils'

export interface ButtonColor {
  default: string
  accent: string
  disabled: string
}

interface StyledButtonProps {
  disabled?: boolean
  backgroundColor: ButtonColor
  textColor: ButtonColor
  borderColor: ButtonColor
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid transparent;

  border-color: ${({ borderColor }) => {
    return borderColor.default
  }};

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

    color: ${({ textColor }) => {
      return textColor.accent
    }};

    border-color: ${({ borderColor }) => {
      return borderColor.accent
    }};
  }
`
export type ButtonVariant
  = 'default'
  | 'outline'

export interface ButtonProps {
  text?: string
  children?: string
  disabled?: boolean
  color?: Colors.ColorKey
  variant?: ButtonVariant
}

export const Button: React.FC<ButtonProps> = ({ text, children, disabled, color, variant }) => {
  const colorName: Colors.ColorKey = color || 'gray'
  const buttonVariant: ButtonVariant = variant || 'default'

  const backgroundColor = ButtonColorUtils.backgroundColor({
    colorName,
    variant: buttonVariant
  })
  const textColor = ButtonColorUtils.textColor({
    colorName,
    variant: buttonVariant
  })
  const borderColor = ButtonColorUtils.borderColor({
    colorName,
    variant: buttonVariant
  })

  return (
    <StyledButton 
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      disabled={disabled}
    >
      {text || children || 'button'}
    </StyledButton>
  )
}
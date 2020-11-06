import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../Colors/color.constants'

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;

  cursor: pointer;

  color: ${COLORS.BASE.BASE_BLACK};
`

export const Button: React.FC = () => {
  return (
    <StyledButton>Button</StyledButton>
  )
}
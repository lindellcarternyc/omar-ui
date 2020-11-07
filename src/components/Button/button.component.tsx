import React from 'react'
import styled from 'styled-components'
import * as Colors from '../constants/colors'

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;

  cursor: pointer;

  color: ${Colors.Black};
`

export const Button: React.FC = () => {
  return (
    <StyledButton>Button</StyledButton>
  )
}
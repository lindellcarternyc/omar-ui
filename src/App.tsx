import React from 'react'
import styled from 'styled-components'

import { Button } from './components/Button'
import { ColorSwatch } from './components/ColorSwatch'

const StyledApp = styled.div`
  border: 1px solid red;
`

function App() {
  return (
    <StyledApp>
      <Button>
        Button
      </Button>
      <ColorSwatch color="darkblue" />
      <ColorSwatch color="dark blue" />
      <ColorSwatch color="#eaeaea"/>
    </StyledApp>
  );
}

export default App;

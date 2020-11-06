import { Meta } from '@storybook/react'
import { createStoryFactory } from '../utils/storybook.utils'
import ColorSwatch from './color-swatch'

export default {
  title: 'Color Swatch',
  component: ColorSwatch
} as Meta

const createColorSwatch = createStoryFactory(ColorSwatch)

export const DefaultColorSwatch = createColorSwatch({
  color: '#2266ff'
})

export const TitleColorSwatch = createColorSwatch({
  color: '#2266ff',
  title: 'Nice Blue'
})

export const InvalidColorSwatch = createColorSwatch({
  color: 'gloop'
})

export const InvalidTitleColorSwatch = createColorSwatch({
  color: 'gloo',
  title: 'Nope :)'
})
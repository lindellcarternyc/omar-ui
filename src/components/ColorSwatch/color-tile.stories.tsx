import { Meta } from '@storybook/react'
import { createStoryFactory } from '../utils/storybook.utils'
import ColorTile, { ColorTileProps } from './color-tile'

export default {
  title: 'Color Tile',
  component: ColorTile
} as Meta

const createColorTileStory = createStoryFactory(ColorTile)

const DefaultColorTileProps: ColorTileProps = {
  size: 120,
  borderColor: 'gray',
  color: '#2288ff'
}

export const ValidColorTile = createColorTileStory(DefaultColorTileProps)

export const InvalidColorTile = createColorTileStory({
  ...DefaultColorTileProps,
  color: 'submarine'
})
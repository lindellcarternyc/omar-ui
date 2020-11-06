import { Meta } from '@storybook/react'
import { createStoryFactory } from '../utils/storybook.utils'
import ColorSwatchGroup, { ColorSwatchGroupProps } from './color-swatch-group'

import * as Colors from '../constants/colors'

export default {
  title: 'Color Swatch Group',
  component: ColorSwatchGroup
} as Meta

const createColorSwatchGroupStory = createStoryFactory(ColorSwatchGroup)

const BaseThemeColorGroupProps: ColorSwatchGroupProps = {
  title: 'Base Theme Colors',
  colors: [{
    title: 'Red',
    value: Colors.Red
  }, {
    title: 'Yellow',
    value: Colors.Yellow
  }, {
    title: 'Green',
    value: Colors.Green
  }, {
    title: 'Medium Blue',
    value: Colors.MediumBlue
  }, {
    title: 'Dark Blue',
    value: Colors.DarkBlue
  }, {
    title: 'Medium Gray',
    value: Colors.MediumGray
  }, {
    title: 'White',
    value: Colors.White
  }, {
    title: 'Black',
    value: Colors.Black
  }]
}

export const BaseThemeColorGroup = createColorSwatchGroupStory(BaseThemeColorGroupProps)
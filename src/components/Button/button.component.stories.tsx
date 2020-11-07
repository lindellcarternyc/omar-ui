import { Meta } from '@storybook/react'
import { Button } from '.'
import { createStoryFactory } from '../utils/storybook.utils'
import { ButtonProps } from './button.component'

export default {
  title: 'Button',
  component: Button
} as Meta

const createButtonStory = createStoryFactory(Button)

const DefaultButtonProps: ButtonProps = {
  text: 'hello',
}

export const DefaultButton = createButtonStory(
  DefaultButtonProps
)

export const BlueButton = createButtonStory({
  ...DefaultButtonProps,
  color: 'blue'
})

export const YellowButton = createButtonStory({
  color: 'yellow'
})

export const RedButton = createButtonStory({
  color: 'red'
})

export const DarkBlueButton = createButtonStory({
  color: 'darkblue'
})

export const GreenButton = createButtonStory({
  color: 'green'
})
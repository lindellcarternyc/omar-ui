import React from 'react'
import { Story } from '@storybook/react'

/**
 * @template P
 * @param {React.ComponentType<P>} Component
 */
function createStoryFactory<P>(Component: React.ComponentType<P>): (props: P) => Story<P> {
  const Template: Story<P> = props => <Component {...props }/>

  return props => {
    const story = Template.bind({})
    story.args = { ...props }
    return story
  }
}

export {
  createStoryFactory
}
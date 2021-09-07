import { Story, Meta } from '@storybook/react'
import ItemBox from '.'

export default {
  title: 'ItemBox',
  component: ItemBox,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <ItemBox />

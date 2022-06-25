import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Forecast } from './forecast';
import { forecast } from '../../../__mocks__/forecast';

export default {
  title: 'Components/Forecast',
  component: Forecast,
} as ComponentMeta<typeof Forecast>;

const Template: ComponentStory<typeof Forecast> = (args) => (
  <Forecast {...args} />
);

export const Example = Template.bind({});
Example.args = { forecast };

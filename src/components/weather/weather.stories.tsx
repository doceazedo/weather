import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Weather } from './weather';

export default {
  title: 'Components/Weather',
  component: Weather,
} as ComponentMeta<typeof Weather>;

const Template: ComponentStory<typeof Weather> = (args) => (
  <Weather {...args} />
);

export const Example = Template.bind({});
Example.args = {
  temperature: 18,
  unit: 'C',
  location: 'Pedro Leopoldo',
  feelsLike: 17,
  rain: 0,
  chance: 1,
};

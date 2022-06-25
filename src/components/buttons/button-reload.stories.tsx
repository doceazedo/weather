import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonReload } from './button-reload';

export default {
  title: 'Components/Button',
  component: ButtonReload,
} as ComponentMeta<typeof ButtonReload>;

const Template: ComponentStory<typeof ButtonReload> = (args) => (
  <Wrapper>
    <ButtonReload {...args} />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: 16rem;
  height: 12rem;
  border: 1px solid #dcdee1;
  border-radius: 0.25rem;
`;

export const ReloadButton = Template.bind({});

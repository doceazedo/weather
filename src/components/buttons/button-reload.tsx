import styled from '@emotion/styled';
import { useState } from 'react';
import { RefreshIcon } from '../icons';
import { Button } from './button';

type ButtonReloadProps = {
  onClick?: () => void;
};

type ButtonStyledProps = {
  deg: number;
};

export const ButtonReload = (props: ButtonReloadProps) => {
  const [rotation, setRotation] = useState(0);

  return (
    <ButtonStyled
      deg={rotation}
      onClick={() => {
        setRotation(rotation - 360);
        if (!!props.onClick) props?.onClick();
      }}
    >
      <RefreshIcon />
    </ButtonStyled>
  );
};

export const ButtonStyled = styled(Button)<ButtonStyledProps>`
  display: flex;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    transform: rotate(${({ deg }) => deg}deg);
    transition: all 0.5s ease;
  }
`;

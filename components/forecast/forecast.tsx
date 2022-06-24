import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type ForecastItemProps = {
  active: boolean;
}

type Forecast = {
  weekday: string;
  icon: ReactNode;
  temperatures: string;
  setCurrent: () => void;
} & ForecastItemProps;

type ForecastProps = {
  forecast: Forecast[];
}

export const Forecast = (props: ForecastProps) => {
  return (
    <ForecastWrapper>
      {props.forecast.map((forecast, i) => (
        <ForecastItem key={i} active={forecast.active} onClick={forecast.setCurrent}>
          <p>{forecast.weekday}</p>
          {forecast.icon}
          <p>{forecast.temperatures}</p>
        </ForecastItem>
      ))}
    </ForecastWrapper>
  )
}

const ForecastWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

const ForecastItem = styled.div<ForecastItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  padding: 1rem .75rem;
  box-shadow: rgba(0, 0, 0, .05) 0 6px 24px 0, rgba(0, 0, 0, .08) 0 0 0 1px;
  border-radius: .25rem;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    transform: translateY(-.25rem);
  }

  svg {
    height: 3rem;
    width: 3rem;
  }

  ${({ active }) => active && ForecastItemActive}
`;

const ForecastItemActive = css`
  box-shadow: rgba(0, 0, 0, .05) 0 6px 24px 0, #3AB0FF 0 0 0 1px;
  background-color: rgba(58, 176, 255, .1);
`;

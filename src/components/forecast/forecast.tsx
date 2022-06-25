import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type ForecastItemProps = {
  active: boolean;
};

type Forecast = {
  weekday: string;
  icon: ReactNode;
  temperatures: string;
  setCurrent: () => void;
} & ForecastItemProps;

type ForecastProps = {
  forecast: Forecast[];
};

export const Forecast = (props: ForecastProps) => {
  return (
    <ForecastWrapper>
      {props.forecast.map((forecast, i) => (
        <ForecastItem
          key={i}
          active={forecast.active}
          onClick={forecast.setCurrent}
        >
          <p>{forecast.weekday}</p>
          {forecast.icon}
          <p>{forecast.temperatures}</p>
        </ForecastItem>
      ))}
    </ForecastWrapper>
  );
};

const ForecastWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1px 1.5rem;
    overflow-x: auto;
  }
`;

const ForecastItem = styled.div<ForecastItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0.75rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-0.25rem);
  }

  svg {
    height: 3rem;
    width: 3rem;
  }

  ${({ active }) => active && ForecastItemActive}

  @media screen and (max-width: 768px) {
    flex-shrink: 0;
  }
`;

const ForecastItemActive = css`
  box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, #3ab0ff 0 0 0 1px;
  background-color: rgba(58, 176, 255, 0.1);
`;

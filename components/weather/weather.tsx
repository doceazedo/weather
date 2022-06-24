import styled from '@emotion/styled';

type WeatherProps = {
  temperature: number;
  unit: string;
  location: string;
  feelsLike: number;
  rain: number;
  chance: number;
}

export const Weather = (props: WeatherProps) => {
  return (
    <WeatherWrapper>
      <Temperature>
        <TemperatureText>{props.temperature}<small>º{props.unit}</small></TemperatureText>
        <LocationText>{props.location}</LocationText>
      </Temperature>
      <WeatherDataList>
        <li>Sensação térmica: {props.feelsLike}º{props.unit}</li>
        <li>Precipitação: {props.rain}mm</li>
        <li>Chance de chuva: {props.chance}%</li>
      </WeatherDataList>
    </WeatherWrapper>
  )
}

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 2rem;
`

const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TemperatureText = styled.h1`
  font-size: 8rem;
  font-weight: 100;

  small {
    font-size: 50%;
    vertical-align: super;
  }
`;

const LocationText = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

const WeatherDataList = styled.ul`
  display: flex;
  font-size: 1.25rem;

  li:not(:last-child)::after {
    content: '•';
    margin: 0 1rem;
    opacity: .75;
  }
`;

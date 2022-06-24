import { useEffect, useState } from 'react';
import { Weather } from '../../components/weather';
import { Forecast } from '../../components/forecast';
import { ButtonReload } from '../../components/buttons';
import {
  CloudIcon,
  CloudLightningIcon,
  FogIcon,
  RainIcon,
  SnowIcon,
  SunBehindCloudIcon,
  SunBehindLargeCloudIcon,
  SunBehindRainIcon,
  SunIcon
} from '../../components/icons';
import { useForecast } from './weather.store';

type Location = {
  lat: number;
  lon: number;
}

type WeatherIcons = {
  [key: string]: JSX.Element;
}

const weatherIcons: WeatherIcons = {
  'clear sky': <SunIcon />,
  'few clouds': <SunBehindCloudIcon />,
  'scattered clouds': <SunBehindLargeCloudIcon />,
  'broken clouds': <CloudIcon />,
  'shower rain': <RainIcon />,
  'rain': <SunBehindRainIcon />,
  'thunderstorm': <CloudLightningIcon />,
  'snow': <SnowIcon />,
  'mist': <FogIcon />,
}

const weekdays = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado'
];

const getWeekday = (dt: number) => {
  const now = new Date();
  const date = new Date(0);
  date.setUTCSeconds(dt);
  if (date.getDate() == now.getDate()) return 'Hoje';
  if (date.getDate() == now.getDate() + 1) return 'Amanhã';
  return weekdays[date.getDay()];
}

const updateWeather = (setLocation: (location: Location) => void, refetch?: () => void) => {
  navigator.geolocation.getCurrentPosition((pos) => {
    setLocation({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    });
  });
  if (refetch) refetch();
}

export const WeatherPage = () => {
  const [ location, setLocation ] = useState<Location>();
  const [ currentWeekday, setWeekday ] = useState(0);
  const { data, refetch } = useForecast(location);

  useEffect(() => updateWeather(setLocation), [setLocation]);

  const region = data ? `${data.city.name}, ${data.city.country}` : '[...]';
  const current = data?.list?.[currentWeekday];
  const forecast = data?.list?.map((forecast, i) => ({
    weekday: getWeekday(forecast.dt),
    icon: weatherIcons?.[forecast.weather?.[0]?.description] || <SunBehindCloudIcon />,
    temperatures: `${Math.round(forecast.main.temp_min)}ºC - ${Math.round(forecast.main.temp_max)}ºC`,
    active: i == currentWeekday,
    setCurrent: () => setWeekday(i),
  })) || [];

  return (
    <>
      <Weather
        temperature={Math.round(current?.main?.temp || 0)}
        unit="C"
        location={region}
        feelsLike={Math.round(current?.main?.feels_like || 0)}
        rain={current?.rain?.['3h'] || 0}
        chance={current?.pop || 0}
      />
      <Forecast forecast={forecast} />
      <ButtonReload onClick={() => updateWeather(setLocation, refetch)} />
    </>
  )
}
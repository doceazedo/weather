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
  SunIcon,
} from '../../components/icons';
import { useForecast } from './weather.store';

type Location = {
  lat: number;
  lon: number;
};

type WeatherIcons = {
  [key: string]: JSX.Element;
};

const unit = 'C';

const weatherIcons: WeatherIcons = {
  'clear sky': <SunIcon />,
  'few clouds': <SunBehindCloudIcon />,
  'scattered clouds': <SunBehindLargeCloudIcon />,
  'broken clouds': <CloudIcon />,
  'shower rain': <RainIcon />,
  rain: <SunBehindRainIcon />,
  thunderstorm: <CloudLightningIcon />,
  snow: <SnowIcon />,
  mist: <FogIcon />,
};

const weekdays = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];

const getWeekday = (i: number) => {
  if (i == 0) return 'Hoje';
  if (i == 1) return 'Amanhã';
  const date = new Date();
  date.setDate(date.getDate() + i);
  return weekdays[date.getDay()];
};

const getWeatherIcon = (key: string) =>
  weatherIcons?.[key] || <SunBehindCloudIcon />;

const getMinMaxTemps = (min: number, max: number) =>
  `${Math.floor(min)}º${unit} - ${Math.ceil(max)}º${unit}`;

const updateWeather = (
  setLocation: (location: Location) => void,
  refetch?: () => void,
) => {
  navigator.geolocation.getCurrentPosition((pos) => {
    setLocation({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    });
  });
  if (refetch) refetch();
};

export const WeatherPage = () => {
  const [location, setLocation] = useState<Location>();
  const [currentWeekday, setWeekday] = useState(0);
  const { data, refetch } = useForecast(location);

  useEffect(() => updateWeather(setLocation), [setLocation]);

  const region = data ? `${data.city.name}, ${data.city.country}` : '[...]';
  const current = data?.list?.[currentWeekday];
  const forecast =
    data?.list?.map((forecast, i) => ({
      weekday: getWeekday(i),
      icon: getWeatherIcon(forecast.weather?.[0]?.description),
      temperatures: getMinMaxTemps(
        forecast.main.temp_min,
        forecast.main.temp_max,
      ),
      active: i == currentWeekday,
      setCurrent: () => setWeekday(i),
    })) || [];

  return (
    <>
      <Weather
        temperature={Math.round(current?.main?.temp || 0)}
        unit={unit}
        location={region}
        feelsLike={Math.round(current?.main?.feels_like || 0)}
        rain={current?.rain?.['3h'] || 0}
        chance={current?.pop || 0}
      />
      <Forecast forecast={forecast} />
      <ButtonReload onClick={() => updateWeather(setLocation, refetch)} />
    </>
  );
};

import { Forecast } from '../src/components/forecast';
import {
  CloudLightningIcon,
  SnowIcon,
  SunBehindCloudIcon,
  SunBehindLargeCloudIcon,
  SunIcon,
} from '../src/components/icons';

export const forecast: Forecast[] = [
  {
    weekday: 'Today',
    icon: <CloudLightningIcon />,
    temperatures: '11ºC - 14ºC',
    setCurrent: () => null,
    active: false,
  },
  {
    weekday: 'Tomorrow',
    icon: <SnowIcon />,
    temperatures: '10ºC - 11ºC',
    setCurrent: () => null,
    active: false,
  },
  {
    weekday: 'Friday',
    icon: <SunBehindCloudIcon />,
    temperatures: '21ºC - 22ºC',
    setCurrent: () => null,
    active: false,
  },
  {
    weekday: 'Saturday',
    icon: <SunBehindLargeCloudIcon />,
    temperatures: '19ºC - 22ºC',
    setCurrent: () => null,
    active: false,
  },
  {
    weekday: 'Sunday',
    icon: <SunIcon />,
    temperatures: '23ºC - 27ºC',
    setCurrent: () => null,
    active: false,
  },
];

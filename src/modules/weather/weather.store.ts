import { useQuery } from 'react-query';
import { getForecast } from './weather.client';
import type { ForecastRequest } from './weather.client';

export const useForecast = (location?: ForecastRequest) =>
  useQuery('forecast', () => getForecast(location), { enabled: !!location });

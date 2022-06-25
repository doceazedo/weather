import type { ForecastResponse } from '../../pages/api/forecast';

export type ForecastRequest = {
  lat: number;
  lon: number;
};

const baseUrl = '/api';

export const getForecast = async (params?: ForecastRequest) => {
  try {
    if (!params) return null;
    const resp = await fetch(
      `${baseUrl}/forecast?lat=${params.lat}&lon=${params.lon}`,
    );
    const data: ForecastResponse = await resp.json();
    return data;
  } catch (error) {
    return null;
  }
};

import { ReactNode } from 'react';
import { render, renderHook, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@testing-library/jest-dom';
import Home from '../src/pages/index';
import { useForecast } from '../src/modules/weather/weather.store';
import { location } from '../__mocks__/location';

type WrapperProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();
const wrapper = (props: WrapperProps) => (
  <QueryClientProvider client={queryClient}>
    {props.children}
  </QueryClientProvider>
);

describe('<Home />', () => {
  it('renders initial content', () => {
    render(wrapper({ children: <Home /> }));
    const weather = screen.getByTestId('weather-wrapper');
    expect(weather).toBeInTheDocument();
  });

  it('gets api weather data', async () => {
    const { result } = renderHook(() => useForecast(location), { wrapper });
    await waitFor(() => result.current.isSuccess);
    expect(result.current.isSuccess).toBeTruthy();
  });
});

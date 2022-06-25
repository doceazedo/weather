import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/minireset.min.css';
import '../styles/globals.css';
import Layout from '../components/layout';
import type { AppProps } from 'next/app';

export const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import client from '../../apollo-client';
import { theme } from 'styles/theme';
import { GlobalStyle } from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;

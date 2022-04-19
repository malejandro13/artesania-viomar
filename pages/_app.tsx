import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from '../styles/globals.styled';
import { theme } from '../styles/theme.styled'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

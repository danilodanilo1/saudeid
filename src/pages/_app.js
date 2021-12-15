import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import dynamic from 'next/dynamic'
import 'nprogress/nprogress.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const TopProgressBar = dynamic(
  () => {
    return import('../components/TopProgress');
  },
  { ssr: false },
);

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <TopProgressBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

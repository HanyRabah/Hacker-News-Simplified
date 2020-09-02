import Layout from "@/components/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

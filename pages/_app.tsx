import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../public/styles/theme";
import Layout from "../components/Layout";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="./icons/icon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1.0, initial-scale=1.0, width=device-width"
        />
        <meta charSet="UTF-8" />
        <title>Title of the site here</title>
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
};

export default CustomApp;

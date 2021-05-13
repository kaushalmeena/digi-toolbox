import { FocusStyleManager } from "@blueprintjs/core";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { FunctionComponent } from "react";
import MainLayout from "../layouts/Main";

import "../styles/index.css";

FocusStyleManager.onlyShowFocusOnTabs();

const MyApp: FunctionComponent<AppProps> = ({
  Component,
  pageProps
}: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
};

export default MyApp;

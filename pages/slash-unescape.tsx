import Head from "next/head";
import React, { FunctionComponent } from "react";
import SlashUnescapePage from "../screens/Tools/Text/SlashUnescape";

const SlashUnescape: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Slash-unescape Text - Online Text Tools</title>
      <meta
        key="description"
        name="description"
        content="Super simple, free and fast browser-based utility for slash-unescaping text."
      />
    </Head>
    <SlashUnescapePage />
  </>
);

export default SlashUnescape;

import Head from "next/head";
import React, { FunctionComponent } from "react";
import EscapeTextPage from "../screens/Tools/Text/EscapeText";

const EscapeText: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Text Escaper Tool for Text Encoding Online</title>
      <meta
        key="description"
        name="description"
        content="Convert plain text/string to Text Escaped easily."
      />
    </Head>
    <EscapeTextPage />
  </>
);

export default EscapeText;

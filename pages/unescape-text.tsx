import Head from "next/head";
import React, { FunctionComponent } from "react";
import UnescapeTextPage from "../screens/Tools/Text/UnescapeText";

const UnescapeText: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Text Unescaper Tool for Text Encoding Online</title>
      <meta
        key="description"
        name="description"
        content="Convert plain text/string to Text Unescaped easily."
      />
    </Head>
    <UnescapeTextPage />
  </>
);

export default UnescapeText;

import Head from "next/head";
import React, { FunctionComponent } from "react";
import SlashEscapePage from "../screens/Tools/Text/SlashEscape";

const SlashEscape: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Text SlashEscaper Tool for Text Encoding Online</title>
      <meta
        key="description"
        name="description"
        content="Convert plain text/string to Text SlashEscaped easily."
      />
    </Head>
    <SlashEscapePage />
  </>
);

export default SlashEscape;

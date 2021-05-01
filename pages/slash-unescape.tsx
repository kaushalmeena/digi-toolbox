import Head from "next/head";
import React, { FunctionComponent } from "react";
import SlashUnescapePage from "../screens/Tools/Text/SlashUnescape";

const SlashUnescape: FunctionComponent = () => (
  <>
    <Head>
      <title key="title"> Unescaper Tool for Encoding Online</title>
      <meta
        key="description"
        name="description"
        content="Convert plain /string to  Unescaped easily."
      />
    </Head>
    <SlashUnescapePage />
  </>
);

export default SlashUnescape;

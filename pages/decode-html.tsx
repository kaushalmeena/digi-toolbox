import Head from "next/head";
import React, { FunctionComponent } from "react";
import DecodeHTMLPage from "../screens/Tools/Text/DecodeHTML";

const DecodeHTML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Decode HTML Code to String Online</title>
      <meta
        key="description"
        name="description"
        content="Convert html encoded text to plain text easily."
      />
    </Head>
    <DecodeHTMLPage />
  </>
);

export default DecodeHTML;

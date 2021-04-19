import Head from "next/head";
import React, { FunctionComponent } from "react";
import EncodeHTMLPage from "../screens/Tools/Text/EncodeHTML";

const EncodeHTML: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Encode HTML Code to String Online</title>
      <meta
        key="description"
        name="description"
        content="Convert string/text to html encoded text easily."
      />
    </Head>
    <EncodeHTMLPage />
  </>
);

export default EncodeHTML;

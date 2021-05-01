import Head from "next/head";
import React, { FunctionComponent } from "react";
import EncodeTextPage from "../screens/Tools/Text/EncodeText";

const EncodeText: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Encode Text Code to String Online</title>
      <meta
        key="description"
        name="description"
        content="Convert string/text to Text encoded text easily."
      />
    </Head>
    <EncodeTextPage />
  </>
);

export default EncodeText;

import Head from "next/head";
import React, { FunctionComponent } from "react";
import ImageToBase64Page from "../screens/Tools/Other/ImageToBase64";

const ImageToBase64: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Image to Base64 - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Super simple, free and fast browser-based utility for converting image to base64 string."
      />
    </Head>
    <ImageToBase64Page />
  </>
);

export default ImageToBase64;

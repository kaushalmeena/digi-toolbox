import Head from "next/head";
import React from "react";
import Base64ToImagePage from "../screens/Tools/Other/Base64ToImage";

function Base64ToImage() {
  return (
    <>
      <Head>
        <title key="title">Base64 to Image - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Super simple, free and fast browser-based utility for converting base64 string to image."
        />
      </Head>
      <Base64ToImagePage />
    </>
  );
}

export default Base64ToImage;

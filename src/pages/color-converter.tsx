import Head from "next/head";
import React from "react";
import ColorConverterPage from "../screens/Tools/Converter/ColorConverter";

function ColorConverter() {
  return (
    <>
      <Head>
        <title key="title">Color Converter - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts color between HEX, RGB and HSL formats."
        />
      </Head>
      <ColorConverterPage />
    </>
  );
}

export default ColorConverter;

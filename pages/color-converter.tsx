import Head from "next/head";
import React, { FunctionComponent } from "react";
import ColorConverterPage from "../screens/Tools/Converter/ColorConverter";

const ColorConverter: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Color Converter - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts color between hex, hsl and rgb formats."
      />
    </Head>
    <ColorConverterPage />
  </>
);

export default ColorConverter;

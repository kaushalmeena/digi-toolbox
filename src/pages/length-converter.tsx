import Head from "next/head";
import React from "react";
import LengthConverterPage from "../screens/Tools/Converter/LengthConverter";

function LengthConverter() {
  return (
    <>
      <Head>
        <title key="title">Length Converter - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts length between kilometer, foot, yard etc."
        />
      </Head>
      <LengthConverterPage />
    </>
  );
}

export default LengthConverter;

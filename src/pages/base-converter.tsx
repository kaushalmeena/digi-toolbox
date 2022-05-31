import Head from "next/head";
import React from "react";
import BaseConverterPage from "../screens/Tools/Converter/BaseConverter";

function BaseConverter() {
  return (
    <>
      <Head>
        <title key="title">Base Converter - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts base between octal, hexadecimal, binary etc."
        />
      </Head>
      <BaseConverterPage />
    </>
  );
}

export default BaseConverter;

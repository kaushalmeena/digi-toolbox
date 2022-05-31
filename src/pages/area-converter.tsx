import Head from "next/head";
import React from "react";
import AreaConverterPage from "../screens/Tools/Converter/AreaConverter";

function AreaConverter() {
  return (
    <>
      <Head>
        <title key="title">Area Converter - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts area between sq. meter, sq mile, sq. foot etc."
        />
      </Head>
      <AreaConverterPage />
    </>
  );
}

export default AreaConverter;

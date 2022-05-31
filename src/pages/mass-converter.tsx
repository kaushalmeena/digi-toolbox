import Head from "next/head";
import React from "react";
import MassConverterPage from "../screens/Tools/Converter/MassConverter";

function MassConverter() {
  return (
    <>
      <Head>
        <title key="title">Mass Converter - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts mass between gram, ounce, pound etc."
        />
      </Head>
      <MassConverterPage />
    </>
  );
}

export default MassConverter;

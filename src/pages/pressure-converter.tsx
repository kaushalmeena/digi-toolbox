import Head from "next/head";
import React from "react";
import PressureConverterPage from "../screens/Tools/Converter/PressureConverter";

function PressureConverter() {
  return (
    <>
      <Head>
        <title key="title">Pressure Converter - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts pressure between bar, pascal, torr etc."
        />
      </Head>
      <PressureConverterPage />
    </>
  );
}

export default PressureConverter;

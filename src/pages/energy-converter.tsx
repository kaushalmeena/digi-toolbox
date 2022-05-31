import Head from "next/head";
import React from "react";
import EnergyConverterPage from "../screens/Tools/Converter/EnergyConverter";

function EnergyConverter() {
  return (
    <>
      <Head>
        <title key="title">Energy Converter - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts energy joule, calorie, electronvolt etc."
        />
      </Head>
      <EnergyConverterPage />
    </>
  );
}

export default EnergyConverter;

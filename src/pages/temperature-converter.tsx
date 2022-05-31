import Head from "next/head";
import React from "react";
import TemperatureConverterPage from "../screens/Tools/Converter/TemperatureConverter";

function TemperatureConverter() {
  return (
    <>
      <Head>
        <title key="title">Temperature Converter - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts temperature between celsius, fahrenheit and kelvin."
        />
      </Head>
      <TemperatureConverterPage />
    </>
  );
}

export default TemperatureConverter;

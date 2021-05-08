import Head from "next/head";
import React, { FunctionComponent } from "react";
import TemperatureConverterPage from "../screens/Tools/Converter/TemperatureConverter";

const TemperatureConverter: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Temperature Converter - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts temperature between Celsius, Fahrenheit, Kelvin etc."
      />
    </Head>
    <TemperatureConverterPage />
  </>
);

export default TemperatureConverter;

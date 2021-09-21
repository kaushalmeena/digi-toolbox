import Head from "next/head";
import React, { FunctionComponent } from "react";
import PressureConverterPage from "../screens/Tools/Converter/PressureConverter";

const PressureConverter: FunctionComponent = () => (
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

export default PressureConverter;

import Head from "next/head";
import React, { FunctionComponent } from "react";
import SpeedConverterPage from "../screens/Tools/Converter/SpeedConverter";

const SpeedConverter: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Speed Converter - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts speed between kilometer/hour, meter/second, miles/hour etc."
      />
    </Head>
    <SpeedConverterPage />
  </>
);

export default SpeedConverter;

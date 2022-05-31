import Head from "next/head";
import React from "react";
import SpeedConverterPage from "../screens/Tools/Converter/SpeedConverter";

function SpeedConverter() {
  return (
    <>
      <Head>
        <title key="title">Speed Converter - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts speed between kilometer/hour, meter/second, mile/hour etc."
        />
      </Head>
      <SpeedConverterPage />
    </>
  );
}

export default SpeedConverter;

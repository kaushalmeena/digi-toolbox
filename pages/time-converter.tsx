import Head from "next/head";
import React, { FunctionComponent } from "react";
import TimeConverterPage from "../screens/Tools/Converter/TimeConverter";

const TimeConverter: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Time Converter - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts time between seconds, hour, week etc."
      />
    </Head>
    <TimeConverterPage />
  </>
);

export default TimeConverter;

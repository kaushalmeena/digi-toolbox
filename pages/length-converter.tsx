import Head from "next/head";
import React, { FunctionComponent } from "react";
import LengthConverterPage from "../screens/Tools/Converter/LengthConverter";

const LengthConverter: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Length Converter - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Simple, free and easy to use online tool that converts lengths between kilometer, meter, centimeter etc."
      />
    </Head>
    <LengthConverterPage />
  </>
);

export default LengthConverter;

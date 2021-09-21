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
        content="Simple, free and easy to use online tool that converts length between kilometer, foot, yard etc."
      />
    </Head>
    <LengthConverterPage />
  </>
);

export default LengthConverter;

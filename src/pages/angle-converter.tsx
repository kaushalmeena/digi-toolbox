import Head from "next/head";
import React from "react";
import AngleConverterPage from "../screens/Tools/Converter/AngleConverter";

function AngleConverter() {
  return (
    <>
      <Head>
        <title key="title">Angle Converter - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts angle between degree, radians, gradian etc."
        />
      </Head>
      <AngleConverterPage />
    </>
  );
}

export default AngleConverter;

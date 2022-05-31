import Head from "next/head";
import React from "react";
import XMLToCSVPage from "../screens/Tools/XML/XMLToCSV";

function XMLToCSV() {
  return (
    <>
      <Head>
        <title key="title">Convert XML to CSV - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that converts XML to CSV."
        />
      </Head>
      <XMLToCSVPage />
    </>
  );
}

export default XMLToCSV;
